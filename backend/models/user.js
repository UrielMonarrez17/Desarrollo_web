const mongoose = require("../conectDB");

const User = mongoose.model('database_users', {
  id: String,
  user_name: String,
  correo: String,
  courses: [ ],
  password: String,
});
module.exports=User;