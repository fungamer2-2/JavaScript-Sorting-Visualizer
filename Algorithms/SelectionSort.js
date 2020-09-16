class SelectionSort {
    static name = "Selection Sort";
}

SelectionSort.run = async function(array) {
    var sorted = false;
    for (var i = 0; i < array.length - 1; i++) {
        var min = i;
        for (var j = i; j < array.length; j++) {
            mark(1, j);
            mark(2, min);
            if (array[j] < array[min]) min = j;
            await sleep();
            render(array);
        }
        mark(1, i);
        mark(2, min);
        swap(array, i, min);
        await sleep();
        render(array);
    }
    
    clearAll()
}
