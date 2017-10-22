//判断一个数的因子是否只含有2，3,5
var isUgly = function(num) {
    if(num <= 0) return false;
    if(num == 1) return true;
    while(num >= 2 && num % 2 == 0) num /= 2;
    while(num >= 3 && num % 3 == 0 ) num /=3;
    while(num >= 5 && num % 5 == 0 ) num /=5;
    if( num == 1) return true;
    else return false;
};
console.log(isUgly(15))