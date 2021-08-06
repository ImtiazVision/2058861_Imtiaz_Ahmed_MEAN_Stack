function validateForm() {
    var x = document.forms["myForm"]["title"].value;
    if (x == "") {
      alert("Title must be filled out");
      return false;
    }