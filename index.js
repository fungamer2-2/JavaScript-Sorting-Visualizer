var canvas = document.getElementById("renderer");
var ctx = canvas.getContext("2d");

alert("Welcome to fungamer2's Sorting Visualizer!");

var delaySlider = document.getElementById("delaySlider");

var delayMs = 30;

delaySlider.value = delayMs;

function render(array) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var barWidth = (canvas.width - 0.2) / array.length;
    
    ctx.fillStyle = "white";
    ctx.fillText("Current Algorithm: " + (currentAlgorithm == null ? "None" : currentAlgorithm.name), 5, 15) 
    
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

function swap(arr, i, j, sleep=0) {
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    if (sleep) {}
}

function sleep(ms) {
    if (ms == undefined) ms = delaySlider.value;
    return new Promise(resolve => setTimeout(resolve, ms));
}

var arrayLength = 64;

var array = generateArray(arrayLength);
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



var algorithms = {
    "Bubble Sort": BubbleSort,
    "Selection Sort": SelectionSort
}


var selectAlgorithm = document.getElementById("algorithmSelector");

for (algorithm in algorithms) {
    var option = document.createElement("option");
    option.value = algorithm;
    option.text = algorithm;
    selectAlgorithm.appendChild(option);
}

var isRunning = false;
var currentAlgorithm = null;

async function runAlgorithm(algo) {
    if (isRunning) return;
    shuffle(array);
    if (algo == undefined) algo = document.getElementById("algorithmSelector").value;
    currentAlgorithm = algorithms[algo];
    isRunning = true;
    await currentAlgorithm.run(array);
    isRunning = false;
}
