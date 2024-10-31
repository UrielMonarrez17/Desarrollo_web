const mongoose = require("../conectDB");

const User = mongoose.model('database_users', {
  id: String,
  user_name: String,
  correo:  String,
  courses_wish: [ ],
  courses_learning: [ ],
  password:String,
  strike:String,
});

User.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
module.exports=User;