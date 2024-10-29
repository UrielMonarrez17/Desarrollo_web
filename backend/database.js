const express = require('express');
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
        res.status(500).json({message: 'Error fetching users'});
        
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

    try {
        for (const filtro of data) {
                
                // Llamada asíncrona a User.find() para cada hobby
                
                 const course = await Courses.find({ Types: filtro.type });

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
module.exports = router; 