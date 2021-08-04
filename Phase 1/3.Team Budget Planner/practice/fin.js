//  DESCRIPTION

// As a developer, write a program using JavaScript to decide the budget of a specific team.

// Background of the problem statement:

// As a developer, you are assigned to a project.You need to develop a website where program managers of a specific team will add details of professional deals they want to have with vendors.The finance team will check expenses of those teams and will decide their annual budget.

// You must use the following:

// Visual Studio Code: An IDE to code for the application
// JavaScript: A programming language
// Git: To connect and push files from the local system to GitHub
// GitHub: To store the application code and track its versions
// JavaScript concepts: Functions, prototypes, primitives, objects, IIFEs, promises, async, and webpack

function storeData() {
    var team = {
        "name": "team",
        "budget": 0,
        "members": []
    };
    return team;
}

function getData() {
    var team = storeData();
    team.budget = prompt("Enter budget");
    team.members.push(prompt("Enter name of the member"));
    team.members.push(prompt("Enter name of the member"));
    team.members.push(prompt("Enter name of the member"));
    team.members.push(prompt("Enter name of the member"));
    team.members.push(prompt("Enter name of the member"));
}

function removeData() {
    var team = storeData();
    team.members.pop();
    team.members.pop();
    team.members.pop();
    team.members.pop();
    team.members.pop();
    team.members.pop();
}

function displayData() {
    var team = storeData();
    console.log(team.budget);
    console.log(team.members);  
}

