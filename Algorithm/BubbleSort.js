class BubbleSort {
    static name = "Bubble Sort";

    static run(array) {
        var sorted = false;
        for (var i = array.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                mark(j, j + 1)
                render(array);
            }
        }
    }
}
