const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var router = express.Router();
const User = require('./models/user');
const Courses = require('./models/cursos');
const CourseInside = require('./models/cursosInside');
const Filters = require('./models/filters');
const Front = require('./front');
router.get('/user', async function(req,res){
    try{
    const users = await User.find();
    //console.log("users:",users);
    res.json(users);
    }catch{
        res.status(500).json({message: 'Error fetching users'});
        console.log("Algo salio teeriblemente mal");
        
        
    }
});

router.get('/courses', async function(req,res){

    try{
    const courses = await Courses.find();
    res.json(courses);
    }catch{
        console.log("Algo salio teeriblemente mal");
        res.status(500).json({message: 'Error fetching courses'});
        
    }
});

router.post('/courses/inside', async function(req,res){
    const {id}=req.body
    
    try{
    const inside = await CourseInside.findOne({id_course:id});
    //console.log("id:",inside)
    res.json(inside);
    }catch{
        console.log("Algo salio tee riblemente mal");
        res.status(500).json({message: 'Error fetching courses'});
        
    }
});

router.post('/courses/learning', async function(req,res){
    const {id,usuario}=req.body;
    try{
    
    const inside = await CourseInside.findOne({id:id});
    const user = await User.find({user_name:usuario});
    const cursos= user[0].courses_learning;
    console.log("nada de sueño1:", user);
    console.log("nada de sueño", cursos);
    if(cursos.includes(id)){
        console.log("aiuda");
        res.send(`/Lessons/${id}`);
    }else{
        console.log("maso");
        res.json(inside);
    }
    
    }catch{
        console.log("Algo salio tee riblemente mal");
        res.status(500).json({message: 'Error fetching courses'});
        
    }
});

router.get('/filters', async function(req,res){

    try{
    const courses = await Filters.find();
    res.json(courses);
    }catch{
        console.log("Algo salio teeriblemente mal");
        res.status(500).json({message: 'Error fetching users'});
        
    }
});

router.post('/filters/exec', async function(req,res){
    const {filters,user}=req.body;
    const results = [];


    try {
        for (const filtro of filters) {
                
                // Llamada asíncrona a User.find() para cada hobby
                
                 const course = await Courses.find({ Types: filtro.type });

                 filtro.checked?
                    results.push( course ):null

                
            }
        //console.log("res:",results);
    res.json(results);
    }catch{
        res.status(500).json({message: 'Error fetching users'});
        console.log("Algo salio teeriblemente mal");
        
        
    }
});

router.post('/courses/user/wish', async function(req,res){
    const {usuario}=req.body;
    
    const results=[];
    try {

    const user = await User.find({user_name:usuario});
        //console.log("cur:",user);
    for (const curso of user[0].courses_wish) {
        
         const course = await Courses.find({ name:curso});
            results.push( course )
        
    }
    //console.log("res:",results);
    res.json(results);

    
    }catch{
        res.status(500).json({message: 'Error fetching users'});
        console.log("Algo salio teeriblemente mal");
        
        
    }
}); 

router.post('/user/register', async (req, res) => {
    const { userName,email, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    const existingUserName = await User.findOne({ userName });
    if (existingUser||existingUserName) {
        return res.status(400).json({ message: 'Este correo ya está registrado' });
    }
    //console.log("user:",userName);
    //console.log("email:",email);
    //console.log("pass:",password);
    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear y guardar el usuario
    const user = new User({
        user_name:userName,
        correo:email,
        password: hashedPassword,
    });
    await user.save();
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
    res.json( token );
});
 
router.post('/user/login', async (req, res) => {
    const { email, password } = req.body;
    // Validación y autenticación del usuario

    const user = await User.findOne({ correo:email });
    //console.log("user:",user);
    //console.log("pass:",password);
    const registered = await user.validatePassword(password);
    
    if (user && registered) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
        res.json({ token,usuario:user.user_name });
    } else {
        res.status(400).json({ message: 'Credenciales incorrectas' });
    }
});

router.post('/user/favorites', async (req, res) => {
    const { nombre, user } = req.body;

    try{


    const actualizacion = await User.updateOne(
        { user_name: user }, // Filtro para encontrar el documento (por ID en este caso)
        { $push: { courses_wish: nombre }}
    );
    //console.log("usuario:",actualizacion);
    res.json({message:"Se ha agregado exitosamente"});
}catch(error) {
    console.error('Error al agregar a favoritos:', error);
    res.status(500).json({message: 'Error al agregar a favoritos'});
}
});

router.post('/user/buy', async (req, res) => {
    const { course_id, user } = req.body;
//console.log("entro:",course_id);
//console.log("entro2:",user);
    try{


    const actualizacion = await User.updateOne(
        { user_name: user }, // Filtro para encontrar el documento (por ID en este caso)
        { $push: {courses_learning: course_id }}
    );
    console.log("usuario:",actualizacion);
    res.json({message:"Se ha agregado exitosamente"});
}catch(error) {
    console.error('Error al agregar a favoritos:', error);
    res.status(500).json({message: 'Error al agregar a favoritos'});
}
});



module.exports = router; 