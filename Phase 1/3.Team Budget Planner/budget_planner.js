// write a program using JavaScript to decide the budget of a specific team. 

function addData() {
  // alert("Event fired...")
  //This code create p tag 
  var name = document.getElementById("client_name").value;
  var age = document.getElementById("project_name").value;
  var budget = document.getElementById("budget_amount").value;
  var myPTag = document.createElement("p");
  //This code create text node 
  var myPTagContent = document.createTextNode("Name is " + name + " Age is " + age);
  myPTag.setAttribute("style", "color:red;");     //inline css 
  myPTag.setAttribute("class", "myPClass");        // external Css 
  //This code add text node to p tag 
  myPTag.appendChild(myPTagContent);
  // refer the tag using id selector and append the p tag to div tag
  document.getElementById("info").appendChild(myPTag);
}