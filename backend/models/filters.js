const mongoose = require("../conectDB");

const Filters = mongoose.model('filters_courses', {
  type: String,
  checked:Boolean

});
module.exports=Filters;