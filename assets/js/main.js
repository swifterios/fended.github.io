$(document).ready(function () {

    particlesJS.load('particles-js', 'assets/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });

});

// Position fixer

// window.onresize = function() {
    var hblock = document.getElementById("hblock");
    var hblockWidth = hblock.clientWidth;
    hblock.style.left = (document.body.clientWidth / 2 - hblockWidth / 2) + "px";
// }

// Mobile animation fixer

var windowHeight = document.getElementById("particles-js");

if (windowHeight.clientHeight <= 700) {
    var animList = document.getElementsByClassName("wow");

    for (i = 0; i < animList.length; i++) {
        animList[i].setAttribute("data-wow-offset", "100");
    }
}
