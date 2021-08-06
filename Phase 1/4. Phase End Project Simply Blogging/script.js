var blog = []; // Creating a global array to store the blog data

// creating a function to submit the blog
function submitBlog() {
  insertNewBlog();
  displayBlog();
}

// creating a function to get the data from the form
function readFormData() {
  var formData = {};
  formData.title = document.getElementById("title").value;
  formData.desc = document.getElementById("desc").value;
  formData.imageId = document.getElementById("imageId").files[0].name;
  console.log(formData);
  return (formData);
}

// creating a function to store and retrieve data from localStorage
function retrieveData() {
  var str = localStorage.getItem("blog");
  console.log(str);
  if (str !== null) {
    blog = JSON.parse(str);
  }
}

// Creating a function to insert new blog data into localStorage
function insertNewBlog() {
  retrieveData();
  var newEntry = readFormData();
  blog.push(newEntry);
  localStorage.setItem("blog", JSON.stringify(blog));
}

// creating a function to display the blog
function displayBlog() {
  retrieveData();
  var container = document.getElementById('blogCont');
  var content = '';
  for (let i = 0; i < blog.length; i++) {
    content += `<div class="card text-white bg-info mb-3" style="width:80%;">
        <img style="width:475px; margin: 10px;" src="${blog[i].imageId}" class="card-img-top">
        <div class="card-body">
        <h3 style="width:80%;" class="card-title">${blog[i].title}</h3>
        <p style="width:80%;" class="card-text">${blog[i].desc}</p>
        <button name="ResetForm" class="btn waves-effect waves-light" id="ResetForm" type="button">Reset Data</button>
        </div>
        </div>
        <hr>
        `;
  }
  container.innerHTML = content;
}