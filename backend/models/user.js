const mongoose = require("../conectDB");

const User = mongoose.model('database_users', {
  id: String,
  user_name: String,
  correo: String,
  courses_wish: [ ],
  courses_learning: [ ],
  password: String,
  strike:String
});
module.exports=User;