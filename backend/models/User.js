const mongose = require("mongoose");

const userSchema = new mongose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongose.model('User', userSchema);
