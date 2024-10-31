const mongoose = require("../conectDB");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  id: String,
  user_name: String,
  correo: String,
  courses_wish: [ ],
  courses_learning: [ ],
  password: String,
  strike: String,
});

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('database_users', userSchema);

module.exports=User;