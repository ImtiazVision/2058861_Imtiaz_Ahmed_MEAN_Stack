function add(name, price) {
    var sessionStrge = sessionStorage.getItem('arr');
    var arr;
    if (sessionStrge === null) {
        arr = [];
    }
    else {
        arr = JSON.parse(sessionStrge);
    }
    var data = {
        "ProductName": name,
        "Price": price
    };
    arr.push(data);
    sessionStorage.setItem('arr', JSON.stringify(arr));
    var a = "<h4> Quantities: ";
    var b = arr.length;
    var c = "</h4>";
  document.getElementById("quantities").innerHTML = a + b + c;
}

function emptyData() {
    sessionStorage.clear();
    var a = "<h4 style=color: aliceblue;> Quantities: 0 </h4>";
  document.getElementById("quantities").innerHTML = a;
}
function checkout() {
    if (sessionStorage.getItem("arr") == null) {
      var empty = "Opps!! Cart is empty!";
        document.getElementById("total").innerHTML = empty;
    }
    else {
      var quantitiesArray = sessionStorage.getItem("arr");
      var quantitiesJson = JSON.parse(quantitiesArray);
        var tableContent = "";
      var startTable = "\n <table class=table>\n    <thead class=table-light>\n        <tr>\n            <th scope=col>Product Name</th>\n            <th scope=col> Product Price</th>\n        </tr>\n    </thead>\n    \n   ";
        var element1 = 0;
        var sum = 0;
        var element2 = 0;
        var str = "";
        var num = 0;
      while (element1 < quantitiesJson.length) {
          str = JSON.stringify(quantitiesJson[element1].Price);
            num = Number(str);
            sum += num;
            element1++;
        }
      while (element2 < quantitiesJson.length) {
          tableContent += "<tr><td>" + quantitiesJson[element2].ProductName + "</td><td>" + quantitiesJson[element2].Price + "</td></tr>";
            element2++;
        }
        tableContent = startTable + tableContent + endTable;
        document.getElementById("main").innerHTML = tableContent;
        var endTable = "</table>";
        var total = " Total Price  = " + sum;
        document.getElementById("total").innerHTML = total;
    }
}
