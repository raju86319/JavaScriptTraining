function add(a) {
    var currentSum = a;
    function sumFn(b) {
        currentSum += b;
        return sumFn;
    }
    sumFn.toString = function () {
        return currentSum;
    }
    return sumFn;
}