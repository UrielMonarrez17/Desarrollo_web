const mongoose = require("../conectDB");

const subLessons = mongoose.model('sub_lecciones', {
  _id: mongoose.Schema.Types.ObjectId,
  leccion_padre: {},
  leccion_number: String,
  video_url: String,
  overview: [],
  name:String
});
module.exports=subLessons;