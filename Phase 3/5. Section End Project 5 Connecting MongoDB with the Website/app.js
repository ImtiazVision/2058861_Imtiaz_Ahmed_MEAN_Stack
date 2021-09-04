// loading express module
let express = require('express');

// loading mongoose module
let mongoose = require('mongoose');

// to avoid lower case collection creation and adding s.
mongoose.pluralize(null);

// referencing the express module
let app = express();

// 