// function storeData() {
//   var newClient = [{client_name: document.getElementById('client_name').value, project_name: document.getElementById('project_name').value, budget_amount: document.getElementById('budget_amount').value}];
//   let companies = JSON.parse(localStorage.getItem("company") || "[]");
//   let company = { cl: "client", pr: "project", b: "budget" };
//   companies.push(company);
//   localStorage.setItem("company", JSON.stringify(companies));
// }

// function getData() {
//   storeData();
//   let companies = JSON.parse(localStorage.getItem("company") || "[]");
//   let company = { cl: "client", pr: "project", b: "budget" };
//   companies.push(company);
//   localStorage.setItem("company", JSON.stringify(companies));
//   let companies = sessionStorage.getItem(company);
//   let companyJson = JSON.parse(companies)
//   console.log("companyObj" + companyJson);
//   clientName = document.getElementById("client").value;
//   projectName = document.getElementById("project").value;
//   budget_amount = document.getElementById("budget").value;
// }
// function removeData() {
//   let companies = JSON.parse(localStorage.getItem("company") || "[]");
//   companies.forEach(element => {
//     localStorage.removeItem("companies");
//   });
// }

// function displayData() {
//   let companies = JSON.parse(localStorage.getItem("companies") || "[]");
//   var tableContent = "";
//   var startTable = "<table border = 1><tr> <th>Client Name </th> <th>Project Name</th> <th>Budget Amount: </th> </tr>";

//   companies.forEach(element => {
//     tableContent += "<tr><td>" + element.client_name + "</td><td>" + element.project_name + "</td><td>" + element.budget_amount + "</td></tr>";

//   });
//   var endTable = "</table>";
//   tableContent = startTable + " " + tableContent + " " + endTable;
//   document.getElementById("main").innerHTML = tableContent;
// }


//create an an empty array -global
let companies = [];

function storeData() {

  // load the past data 
  getData();


  //  let companies = JSON.parse(localStorage.getItem("company")  "[]");   


  //to access the data inside the object array you have to use companies.clientName etc

  let company = {
    clientName: document.getElementById("client_name").value,
    projectName: document.getElementById("project_name").value,

    budget_amount: document.getElementById("budget_amount").value
  };

  companies.push(company);
  localStorage.setItem("company", JSON.stringify(companies));

  //if data is stored you get this message in the console
  console.log("data stored ")

}
function getData() {


  let companies = sessionStorage.getItem(company);
  // let companyJson = JSON.parse(companies)

  //store the data back to the companies array
  companies = JSON.parse(retrivedData);

  //to see the array
  console.log(companies);
  // console.log("companyObj" + companyJson);



}
function removeData() {

  let companies = JSON.parse(localStorage.getItem("company")  "[]");
  companies.forEach(element => {
    localStorage.removeItem("companies");
    // alert("Data is cleared");
  });
}

function displayData() {


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