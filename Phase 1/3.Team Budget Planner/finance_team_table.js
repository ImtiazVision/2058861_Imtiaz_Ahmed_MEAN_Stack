//create an an empty array -global
let companies = [];

function storeData() {
  // take value from text field using client_nameor name
  //we can store json object. but we have to convert 
  // into string. 
  // let default_var = { client_name: "Google", project_name: "Google Cloud", budget: 200000 };
  // sessionStorage.setItem("default_varObj", JSON.stringify(default_var));
  // sessionStorage.setItem("obj1", "Raj");
  // localStorage.setItem("obj1", "Raju");
  // console.log("Data store in session and local storage");


  // getData();

  // code to store data in local storage
  // var newClient = [{ client_name: document.getElementById('client_name').value, project_name: document.getElementById('project_name').value, budget_amount: document.getElementById('budget_amount').value }];
  

  // to load the past data from local storage

  getData();

  

  // let companies = JSON.parse(localStorage.getItem("company") || "[]");

  // To access data inside the array, companies.clientName etc.

  // let company = {cl: "client", pr: "project", b: "budget"};

  let company = {
    clientName: document.getElementById("client_name").value,
    projectName: document.getElementById("project_name").value,

    budget_amount: document.getElementById("budget_amount").value
  };
  companies.push(company);
  localStorage.setItem("company", JSON.stringify(companies));

}

function getData() {
  // storeData();
  let companies = JSON.parse(localStorage.getItem("company") || "[]");
  let companies = localStorage.getItem("company");
  let company = { cl: "client", pr: "project", b: "budget" };
  companies.push(company);
  localStorage.setItem("company", JSON.stringify(companies));
  let companies = sessionStorage.getItem(company);
  let companyJson = JSON.parse(companies)
  console.log("companyObj" + companyJson);

  // getting data from local storage
  clientName = document.getElementById("client_name").value;
  projectName = document.getElementById("project_name").value;
  budget_amount = document.getElementById("budget_amount").value;

}
function removeData() {
  // sessionStorage.removeItem("obj1");
  // sessionStorage.removeItem("default_varObj");
  // localStorage.removeItem("obj1");
  // localStorage.removeItem("default_varObj");

  let companies = JSON.parse(localStorage.getItem("company") || "[]");
  companies.forEach(element => {
    localStorage.removeItem("companies");
    // alert("Data is cleared");
  });
}

function displayData() {
  // let default_varObj = sessionStorage.getItem("default_varObj");
  // let default_varJson = JSON.parse(default_varObj)
  // var tableContent = ""
  // var startTable = "<table border=1><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"

  // tableContent = "<tr><td>" + default_varJson.client_name+ "</td><td>" + default_varJson.project_name + "</td><td>" + default_varJson.budget + "</td></tr>"

  // var endTable = "</table>"
  // tableContent = startTable + tableContent + endTable
  // document.getElementById("main").innerHTML = tableContent;

  // let companies = localStorage.getItem("companies");
  // let companies = JSON.parse("companies");
  // var tableContent = "";
  // var startTable = "<table border=1><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";
  // tableContent = "<tr><td>" + default_varJson.client_name+ "</td><td>" + default_varJson.project_name + "</td><td>" + default_varJson.budget_amount + "</td></tr>";
  // var endTable = "</table>";
  // tableContent = startTable + tableContent + endTable;
  // document.getElementById("main").innerHTML = tableContent;

  // companies.forEach(element => {
  //   document.write(element.clientName, element.projectName, element.budget_amount);

  // });

  let companies = JSON.parse(localStorage.getItem("companies") || "[]");
  var tableContent = "";
  var startTable = "<table border = 1><tr> <th>Client Name </th> <th>Project Name</th> <th>Budget Amount: </th> </tr>";

  companies.forEach(element => {
    tableContent += "<tr><td>" + element.client_name + "</td><td>" + element.project_name + "</td><td>" + element.budget_amount + "</td></tr>";
  
  });
  var endTable = "</table>";
  tableContent = startTable + " " + tableContent + " " + endTable;
  document.getElementById("main").innerHTML = tableContent;
  
}

// sample 
// function display() {

//   // take value from text field using id or name
//   //we can store json object. but we have to convert 
//   // into string. 
//   clientName = document.getElementById("Client").value;
//   projectName = document.getElementById("Project").value;
//   clientName = document.getElementById("Budget").value;
//   let client = JSON.parse(localStorage.getItem("Client")  "[]");
//   localStorage.setItem("Client", JSON.stringify(client));

//   let projectName = JSON.parse(localStorage.getItem("Project")  "[]");
//   var tableContent = "";

//   companies.push(company);
//   localStorage.setItem("companies", JSON.stringify(companies));
// }

  // sample 

  

// Adding data to array as json object

// function storeData() {

//   var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';

//   var obj = JSON.parse(jsonStr);
//   obj['theTeam'].push({ "teamId": "4", "status": "pending" });
//   jsonStr = JSON.stringify(obj);
// "{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"},{"teamId":"4","status":"pending"}]}"

// }

// onRegisterSubmit(){
//   const user = {
//     a: this.a,
//     b: this.b,
//     c: this.c,
//     id: Date.now()
//   }

//   var abc = [];
//   var get = JSON.parse(localStorage.getItem('user'));
//   abc = [get];
//   abc.push(user);

//   localStorage.setItem('user', JSON.stringify(abc));

//   console.log(JSON.stringify(abc));
//   console.log(get);
// }