
function addData() {
  var title = document.getElementById("title").value;
  var article = document.getElementById("article").value;

  var myPTag = document.createElement("p");

  var myPTagContent = document.createTextNode(
    "Title is " + title + " and article is " + article
  );

  myPTag.appendChild(myPTagContent);

  document.getElementById("grid-container").appendChild(myPTag);
}


