let fs = require('fs');

let anythingObj = require('readline-sync');

var entries = anythingObj.question("Enter anything meaningful to be stored inside the array: ");

console.log(entries);

debugger;

let inputArray = new Array();

// Getting user input

for (var i=0; i<parseInt(entries); i++) { 
  let id = anythingObj.questionInt("Please enter your Id: ");
  console.log("You have entered the following Id: "+id);
  debugger;

  let name = anythingObj.question("Please enter your name: ");
  console.log("You have entered the following name: "+name);
  debugger;
  let email = anythingObj.questionEmail("Please enter your email address: ");
  console.log("You have entered the following email: "+email);
  debugger;
  let phone = anythingObj.questionInt("Please enter your phone number: ");
  console.log("You have entered the following phone number: "+phone);
  debugger;

  // JSON

  let jsonArray = {"id":id, "name": name, "email address": email, "time":new Date().toISOString()  }
  inputArray.push(jsonArray);
  debugger;

  // Convertion of string

  let JsonElement = JSON.stringify(inputArray);
  fs.readFileSync('',JsonElement);
  debugger;
  console.log("We have done the code!");
}