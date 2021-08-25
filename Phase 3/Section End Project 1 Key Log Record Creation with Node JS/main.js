let fs = require('fs');
let readline = require('readline-sync');

let fname = readline.question('Enter first name: ');
let lname = readline.question('Enter last name: ');
let gender = readline.question('Enter gender: ');
let email = readline.questionEMail('Enter email: ');

// creating a new empty array and a date variable
let recordsArr = [];
let date = new Date();

let obj = {first_name:fname, last_name:lname,gender_type:gender,email_address:email,curr_date:date};
// pushing the elements into the array
recordsArr.push(obj);

// converting to string via JSON.stringify 
let string_of_obj = JSON.stringify(recordsArr);
// creating a json file using writeFileSync method which will creaate a data.json file and appends the values via {flag:'a+'} so that data is not overriden by the previous data
fs.writeFileSync('data.json', string_of_obj,{flag:'a+'});




