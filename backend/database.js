const express = require('express');
var router = express.Router();
const User = require('./models/user');

router.get('/user', async function(req,res){
    try{
    const users = await User.find();
    console.log("users:",users);
    res.json(users);
    }catch{
        console.log("Algo salio teeriblemente mal");
        res.status(500).json({message: 'Error fetching users'});
        
    }
});

module.exports = router; 