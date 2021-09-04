// loading express module
let express = require('express');

// loading mongoose module
let mongoose = require('mongoose');

// to avoid lower case collection creation and adding s postfix to collection name
mongoose.pluralize(null);

// referencing the express module
let app = express();

// 