function addRow() {

 "use strict";
 let tableBody = document.getElementById("table-body");
 let row = document.createElement("tr");
 let cell1 = document.createElement("td");
 let cell2 = document.createElement("td");
 let cell3 = document.createElement("td");
 let cell4 = document.createElement("td");
 let cell5 = document.createElement("td");
 let cell6 = document.createElement("td");
 cell1.innerHTML = document.GetElementById("cell1").value;
 cell2.innerHTML = document.GetElementById("cell2").value;
 cell3.innerHTML = document.GetElementById("cell3").value;
 cell4.innerHTML = document.GetElementById("cell4").value;
  cell5.innerHTML = document.GetElementById("cell5").value;
 cell6.innerHTML = document.GetElementById("cell6").value;
 row.appendChild(cell1);
 row.appendChild(cell2);
 row.appendChild(cell3);
 row.appendChild(cell4);
 row.appendChild(cell5);
 row.appendChild(cell6);
 tableBody.children.appendChild(row);
}
