const express = require('express');
const path = require('path');

const rutaDatabase= require("./backend/database");
const rutaApi= require("./backend/api");
const app = express();
const cors = require('cors');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Mongo Endpoints
app.use('/database',rutaDatabase);
app.use('/api',rutaApi);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});