const mongoose = require("../conectDB");

const menu_courses = mongoose.model('menu_cursos', {
  _id: mongoose.Schema.Types.ObjectId,
  name_course: String,
  id_course: String,
  temas: []
});
module.exports=menu_courses;