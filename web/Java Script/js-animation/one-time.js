var id = setTimeout(anim, 5000);

function anim() {
    var traget = document.getElementById("text");
    traget.style.width = "500px";
}

function stopAnimation(){
    clearTimeout(id);
}