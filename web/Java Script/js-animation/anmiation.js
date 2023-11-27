var a = 0
var kk = setInterval(anim, 100);

function anim() {
    a = a + 10;
    if (a == 200) {
        clearInterval(kk);
    } else {


        var target = document.getElementById("text");
        target.style.marginLeft = a + 'px';
    }

}