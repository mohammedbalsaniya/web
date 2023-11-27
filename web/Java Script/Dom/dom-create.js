/*var newElement = document.createElement("h1");

var newtext = document.createTextNode("this just");

//var newComment = document.createComment("this is coment");

newElement.appendChild(newtext);

//document.getElementById("test").appendChild(newElement);
var traget = document.getElementById("test");

traget.insertBefore(newElement,traget.childNodes[1]);*/

//var a = document.createElement("h2");

//var b = document.createTextNode("this just text");

//a.appendChild(b);

var c = document.getElementById("test");

var newe = "<h2>This is add</h2>"

c.insertAdjacentHTML("afterbegin",newe);

