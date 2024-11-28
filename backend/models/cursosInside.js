const mongoose = require("../conectDB");

const CourseInside = mongoose.model('insideCourses', {
  _id: String,
  id: String,
  video_url: String,
  aprendizajes:[],
  contenido: [],
  requisitos:[],
  descripcion:String
});
module.exports=CourseInside;