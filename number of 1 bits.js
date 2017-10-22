var hammingWeight = function (n) {
    var str = n.toString(2);
    var arr = str.split("");
    var len = arr.length;
    for (var i = 0; i < 32 - len; i++) {
        arr.push("0");
    }
    arr = arr.join("");
    var len = arr.length;
    var c = 0;
    for (var i = 0; i < len; i++) {
        if (arr[i] == 1) c = c + 1;
    }
    return c;
}
console.log(hammingWeight(10))
