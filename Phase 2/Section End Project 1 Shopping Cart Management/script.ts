function add(name: string, price: number) {
  const sessionStrge = sessionStorage.getItem("arr");
  let arr: any[];
  if (sessionStrge === null) {
    arr = [];
  } else {
    arr = JSON.parse(sessionStrge);
  }

  var data = {
    ProductName: name,
    Price: price,
  };

  arr.push(data);
  sessionStorage.setItem("arr", JSON.stringify(arr));

  let a: any = "<h4> Quantities: ";
  let b: any = arr.length;
  let c: any = "</h4>";
  document.getElementById("quantities").innerHTML = a + b + c;
}

function emptyData() {
  sessionStorage.clear();
  let a: any = "<h4 style=color: aliceblue> Quantities: 0 </h4>";
  document.getElementById("quantities").innerHTML = a;
}
function checkout() {
  if (sessionStorage.getItem("arr") == null) {
    let empty: string = "Opps!! Cart is empty!";
    document.getElementById("total").innerHTML = empty;
  } else {
    let quantitiesArray: any = sessionStorage.getItem("arr");
    let quantitiesJson: any = JSON.parse(quantitiesArray);
    let tableContent: string = "";
    var startTable: string = `
    <table class=table>
    <thead class=thead-light>
        <tr>
            <th scope=col>ProductName</th>
            <th scope=col>ProductPrice</th>
        </tr>
    </thead>
    
    `;
    let element1: number = 0;
    let sum: number = 0;
    let element2: number = 0;
    let str: string = "";
    let num: number = 0;

    while (element1 < quantitiesJson.length) {
      str = JSON.stringify(quantitiesJson[element1].Price);
      num = Number(str);
      sum += num;
      element1++;
    }

    while (element2 < quantitiesJson.length) {
      tableContent +=
        "<tr><td>" +
        quantitiesJson[element2].ProductName +
        "</td><td>" +
        quantitiesJson[element2].Price +
        "</td></tr>";
      element2++;
    }

    tableContent = startTable + tableContent + endTable;
    document.getElementById("main").innerHTML = tableContent;
    var endTable: string = "</table>";

    let total: string = " Total Price = " + sum;
    document.getElementById("total").innerHTML = total;
  }
}
