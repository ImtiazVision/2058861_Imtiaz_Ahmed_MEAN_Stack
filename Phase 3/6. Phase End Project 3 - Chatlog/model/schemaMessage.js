const mongoose = require('mongoose');
mongoose.pluralize(null);

let schemaMessage = mongoose.Schema({
  _id: Number,
  name: String,
  message: String,
  time_sent: String
})

let messageModel = mongoose.model("Messages", schemaMessage);
module.exports = messageModel;