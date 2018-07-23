function move() {
    var elem = document.getElementById("myBar-1"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

// Bar 2 

function move2() {
    var elem = document.getElementById("myBar-2"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 84) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

// Bar 3 

function move3() {
    var elem = document.getElementById("myBar-3"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}