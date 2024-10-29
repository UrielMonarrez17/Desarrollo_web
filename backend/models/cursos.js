const mongoose = require("../conectDB");

const Course = mongoose.model('cursos_disponibles', {
  id: String,
  name: String,
  hours: String,
  image:String,
  Types:[],
  description: String,
  autor:String,
  course_url:String,
  price:String
});
module.exports=Course;