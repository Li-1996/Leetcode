//整数反转
var reverse = function(x) {
    var flag;
    if (x < 0){
        x = -x;
        flag = true;
    }
    var a = [];
    var i = 0;
    while(x > 0){
        a[i] = x % 10;
        x = Math.floor(x / 10); //Math.floor:向下取整计算
        //console.log(x);
        console.log(a[i]);
        i++;
    }
    var res = 0;
    i--;
    var k = i;
    while(i > -1){
        res += a[i] * Math.pow(10, k-i);//Math.pow(x,y),返回x的y次幂的值
        i--;
    }
    if (res > 2147483647){
        return 0;
    }
    return flag?-res:res
};
//test
console.log(reverse(-123));