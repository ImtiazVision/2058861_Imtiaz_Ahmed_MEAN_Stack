const mongoose = require('mongoose');
mongoose.pluralize(null);

let messageSchema = mongoose.Schema({
  _id: Number,
  name: String,
  message: String,
  time_sent: String
})

let messageModel = mongoose.model("Messages", messageSchema);
module.exports = messageModel;