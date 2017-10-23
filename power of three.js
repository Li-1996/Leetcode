//判断一个数是不是3的n次幂
var isPowerOfThree = function(n) {
    //方法一  循环
    while(n > 0 && n % 3 == 0){
        n = n / 3;
    }
    if(n == 1)
    return true;
    else return false;
    //方法2 华人IT网
    //if(n<1) return false;
    //var max = Math.pow(3, 19);
    //return max%n === 0;
};
console.log(isPowerOfThree(9))
