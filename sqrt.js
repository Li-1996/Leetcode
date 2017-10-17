var mySqrt = function (x) {
    /*
     //方法1
     return Math.floor(Math.sqrt(x));

    //方法2  二分法
    if (x == 0) {
        return 0;
    }
    var begin = 1;
    var end = x;
    while(begin <= end){
        var mid = Math.floor(begin + (end - begin) / 2);
        if( mid == x / mid) return mid;
        else{
            if( mid < x / mid) begin = mid + 1;
            else end = mid - 1;
        }
    }
    return end;
     */
    //从1开始遍历行不通
    if(x == 0)
    return 0;
    var i = 1;
    while(i < x){
        if(i == Math.floor(x / i)) return i;
        else i++;
    }
};
console.log(mySqrt(6))