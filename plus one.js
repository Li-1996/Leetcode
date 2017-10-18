var plusOne = function(digits){
    var a = 1; //令进位标识初始值为1
    for(var i = digits.length - 1; i >= 0; i--){
        // 不断处理进位
        var newNum = digits[i] + a;
        digits[i] = newNum % 10;
        a = Math.floor(newNum / 10);
    }
    // 如果最后还有进位，则在数组最前面插入1
    if(a == 1){
        digits.unshift(1);
    }
    return digits;
}
console.log(plusOne([1,0]))