var isPowerOfFour = function(num) {
    while (num > 0 && num % 4 ==0) {
        num = num / 4;
    }
    if(num == 1) return true;
    else return false;
};
console.log(isPowerOfFour(10))
