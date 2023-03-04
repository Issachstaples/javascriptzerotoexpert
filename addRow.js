function  addRow(){
  let styledTable = document.getElementById("styled-table");
  let buttonTableAddRow =  document.getElementById("tableAddRow");
  let table = document.getElementById("styled-table");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
   cell1.innerHTML =  `new weapon`;
   cell2.innerHTML =  `n/a`;  
   cell3.innerHTML =  ` s`;
   cell4.innerHTML =  `5`;
   cell5.innerHTML =  ` 1d4`;
   cell6.innerHTML =  `test`;
  }
