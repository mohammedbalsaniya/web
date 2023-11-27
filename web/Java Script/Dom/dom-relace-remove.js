var newelemet = document.createElement("li");

var newtext = document.createTextNode("WOW ");

newelemet.appendChild(newtext);

var target = document.getElementById("list");

var oldElemet = target.children[3];

//console.log(oldElemet);

target.replaceChild(newelemet,oldElemet);