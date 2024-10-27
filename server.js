const express = require('express');
const path = require('path');
const User = require('./src/models/user');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Dinovision:rqT4xZu2RG28iiqc@dinovision0.6kejp.mongodb.net/?retryWrites=true&w=majority&appName=dinovision0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Database_users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));


app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Mongo Endpoints
app.get('/', async (req, res) => {
  try {
    const users = await User.find();  // Obtiene todos los usuarios de la base de datos
    console.log("users:",users)
    res.json(users);
    
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
