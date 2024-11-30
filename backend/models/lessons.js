const mongoose = require("../conectDB");

const Lessons = mongoose.model('lecciones', {
  _id: mongoose.Schema.Types.ObjectId,
  curso_padre: {},
  nombre: String,
  leccion_number: Number,
  description: String,
  partes:[]
});
module.exports=Lessons;