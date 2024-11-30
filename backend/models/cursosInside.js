const mongoose = require("../conectDB");

const CourseInside = mongoose.model('insideCourses', {
  _id: String,
  id_course: String,
  video_url: String,
  aprendizajes:[],
  contenido: [],
  requisitos:[],
  descripcion:String
});
module.exports=CourseInside;