class BubbleSort {
    static name = "Bubble Sort";

    static run(array) {
        var sorted = false;
        for (var i = array.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                mark(0, j);
                mark(1, j + 1);
                if (array[j] > array[j + 1]) var tmp = array[j]; array[j] = array[j + 1]; array[j + 1] = tmp
                render(array);
            }
        }
    }
}