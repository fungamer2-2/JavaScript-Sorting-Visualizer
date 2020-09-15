class SelectionSort {
    static name = "Selection Sort";
}

SelectionSort.run = async function(array) {
    var sorted = false;
    for (var i = 0; i < array.length - 1; i++) {
        var min = i;
        for (var j = i; j < array.length; j++) {
            mark(1, i);
            mark(1, min);
            if (array[i] < array[min]) min = i;
            sleep();
        }
        swap(array, i, min);
        sleep();
    }
    
    clearAll()
}
