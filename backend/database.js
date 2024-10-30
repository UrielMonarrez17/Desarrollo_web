const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var router = express.Router();
const User = require('./models/user');
const Courses = require('./models/cursos');
const Filters = require('./models/filters');

router.get('/user', async function(req,res){
    try{
    const users = await User.find();
    console.log("users:",users);
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
    const data=req.body;
    const results = [];
    const token = localStorage.getItem('token');
    console.log("token:",token);
    try {
        for (const filtro of data) {
                
                // Llamada asíncrona a User.find() para cada hobby
                
                 const course = await User.find({ _id: token });

                 filtro.checked?
                    results.push( course ):null

                
            }
        console.log("res:",results);
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

    const user = await User.find(usuario);

    for (const curso of user.courses_wish) {
        
         const course = await Courses.find({ name:curso});
            results.push( course )
        
    }
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
    if (existingUser) {
        return res.status(400).json({ message: 'Este correo ya está registrado' });
    }

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


module.exports = router; 