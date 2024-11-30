require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;
const DB= process.env.MONGO_DB;
const url =`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@dinovision0.6kejp.mongodb.net/${DB}?retryWrites=true&w=majority&appName=dinovision0`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {console.log('Conectado a MongoDB');
    console.log('Base de datos conectada:', mongoose.connection.name); 
})
.catch(error => console.error('Error al conectar a MongoDB:', error));

module.exports = mongoose;