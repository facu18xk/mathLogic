const btn = document.querySelector('.btn');
const prop1 = document.querySelector('.proposition1');
const prop2 = document.querySelector('.proposition2');
const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const tableContainer = document.querySelector(".table");
let container = document.createElement('div'), table = document.createElement('table'), thead = document.createElement("th"), tr = document.createElement("tr"), td = document.createElement("td"), option
thead.textContent = "Proposiciones";
tr.appendChild(thead);
thead.textContent = "Valores de verdad"
tr.appendChild(thead);
table.appendChild(tr);

//Option va a ser igual a 1 si es verdadero y verdadero 
//2 si est verdadero y falso 
//3 si es falso y verdadero 
//4 si es falso y falso 
//For each conective im gonna have an array order by the options 
const and = [true, false, false, false]
const inclusiveOr = [true, true, true, false]
const exclusiveOr = [false, true, true, false]
const condition = [true, false, true, true]
const bicondition = [true, false, false, true]
btn.addEventListener("click", () => {
  tableContainer.appendChild(table);

  console.clear();
  //Select the option based on the input 
  if (value1.value == "verdadero" && value2.value == "verdadero") option = 0
  else if (value1.value == "verdadero" && value2.value == "falso") option = 1
  else if (value1.value == "falso" && value2.value == "verdadero") option = 2
  else if (value1.value == "falso" && value2.value == "falso") option = 3
  //Primera tabla
  if (and[option]) {
    console.log("Es verdad")
  } else {
    console.log("Es falso")
  }
  if (inclusiveOr[option]) {
    console.log("Es verdad")
  } else {
    console.log("Es falso")
  }
  if (exclusiveOr[option]) {
    console.log("Es verdad")
  } else {
    console.log("Es falso")
  }
  if (condition[option]) {
    console.log("Es verdad")
  } else {
    console.log("Es falso")
  }
  if (bicondition[option]) {
    console.log("Es verdad")
  } else {
    console.log("Es falso")
  }
  //Segunda tabla
  //Tercera tabla
  //Cuarta tabla
  //Quinta tabla
  //Sexta tabla
})
