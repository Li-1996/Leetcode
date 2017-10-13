//判断一个整数是不是回文
var isPalindrome = function(x){
    /*
//方法1
    x = x + '';
    var arr = x.split(""); //将字符串分割成字符串数组
    var str = arr.join(""); //将数组中所有元素放入一个字符串
    var arr1 = arr.reverse("");
    var str1 = arr1.join("");
    if( str == str1){
        return true;
    }
    else{
        return false;
    }

//方法2：
    var a =[];
    var i = 0;
    var n = x;
    while(n > 0){
        a[i] = n % 10; //取最后一位数
        n = Math.floor(n/10);
        i++;
    }
    var res = 0;
    i--;
    var k=i;
    while (i > -1){
        res += a[i] * Math.pow(10, k-i);
        i--;
    }
    console.log(res);
    console.log(x);
    if(res == x){
        return true;
    }
    else{
        return false;
    }
    */
//方法3
    var rev = 0;
    while (x > rev) {
        rev = rev * 10 + x % 10;
        x= Math.floor(x/10);
        console.log(rev);
        console.log(x);
    }
    if(x == rev || x == Math.floor(rev/10)){
        return true;
    }else{
        return false;
    }
};
console.log(isPalindrome(123))