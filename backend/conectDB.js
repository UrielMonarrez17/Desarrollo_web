const mongoose = require('mongoose');

const url ="mongodb+srv://Dinovision:12345@dinovision0.6kejp.mongodb.net/Users?retryWrites=true&w=majority&appName=dinovision0";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {console.log('Conectado a MongoDB');
    console.log('Base de datos conectada:', mongoose.connection.name); 
})
.catch(error => console.error('Error al conectar a MongoDB:', error));

module.exports = mongoose;