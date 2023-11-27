var traget = document.getElementById("list1").children[3];
var copyElement = traget.cloneNode(true);

console.log(copyElement);

document.getElementById("list2").appendChild(copyElement);