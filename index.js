var canvas = document.getElementById("renderer");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

alert("Welcome to fungamer2's Sorting Visualizer!\nNote: This visualizer is in pre-alpha and is not fully developed");

function render(array) {
    
}

function generateArray(length) {
    var array = new Array(length);
    for (var i = 0; i < length; i++) {
        array[i] = i + 1;
    }
    return array;
}

function shuffleArray(array) {
    for (var i = 0; i < length - 1; i++) {
        var j = i + Math.floor(Math.random() * (length - i));
        var tmp = array[i]; array[i] = array[j]; array[j] = tmp;
    }
}
