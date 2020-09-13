var canvas = document.getElementById("renderer");
var ctx = canvas.getContext("2d");

alert("Welcome to fungamer2's Sorting Visualizer!\nNote: This visualizer is in pre-alpha and is not fully developed");

function render(array) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var barWidth = canvas.width / array.length;
    
    ctx.fillStyle = "white";
    for (var i = 0; i < array.length; i++) {
        ctx.fillRect(i * barWidth, canvas.height, barWidth, -array[i] * canvas.height / array.length);
    }
}

function generateArray(length) {
    var array = new Array(length);
    for (var i = 0; i < length; i++) {
        array[i] = i + 1;
    }
    return array;
}

function shuffle(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (array.length - i));
        var tmp = array[i]; array[i] = array[j]; array[j] = tmp;
    }
}

var arrayLength = 64

var array = generateArray(arrayLength);
shuffle(array);
render(array);
