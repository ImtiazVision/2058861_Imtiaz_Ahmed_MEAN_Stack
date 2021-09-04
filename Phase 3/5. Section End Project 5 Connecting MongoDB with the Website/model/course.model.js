// load the mongoose module
let mongoose = require('mongoose');

// To avoid creating in lowercase with s postfix
mongoose.pluralize(null);

// creating schema
let courseSchema = new mongoose.Schema({ 
  _id: { type: Number, required: true },
  courseName: { type: String, required: true },
  courseDescription: { type: String, required: true },
  coursePrice: { type: Number, required: true }
});

// creating model using schema

let courseModel = mongoose.model('Course', courseSchema);

// exporting the course model so that we can use 'require' in other file to use this model
module.exports = courseModel;