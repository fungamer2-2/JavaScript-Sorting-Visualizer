var canvas = document.getElementById("renderer");
var ctx = canvas.getContext("2d");

alert("Welcome to fungamer2's Sorting Visualizer!\nNote: This visualizer is in pre-alpha and is not fully developed");

function render(array) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var barWidth = canvas.width / array.length;
    
    for (var i = 0; i < array.length; i++) {
        ctx.fillStyle = hasMarkerPosition(i) ? "red" : "white";
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

function swap(arr, i, j) {
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var arrayLength = 64

var array = generateArray(arrayLength);
shuffle(array);
render(array);

var markers = new Array(length);
markers.fill(-1);
var highestMarkedPos = -1;

function mark(marker, position) {
    markers[marker] = position;
    if (marker > highestMarkedPos) highestMarkedPos = marker;
}

function hasMarkerPosition(pos) {
    for (var i = 0; i <= highestMarkedPos; i++) {
        if (markers[i] == pos) return true;
    }
    return false;
}

function clearMark(pos) {
    markers[pos] = -1;
    if (pos == highestMarkedPos) {
        for (highestMarkedPos = pos - 1; highestMarkedPos >= 0 && markers[highestMarkedPos] == -1; highestMarkedPos--);
    }
}

function clearAll() {
    markers.fill(-1, 0, highestMarkedPos);
    highestMarkedPos = 0;
}

//BubbleSort.run(array);
