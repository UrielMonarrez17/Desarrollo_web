const mongoose = require("../conectDB");

const Course = mongoose.model('cursos_disponibles', {
  id: String,
  course_name: String,
  hours: Int32,
});
module.exports=Course;