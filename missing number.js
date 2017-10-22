// 一个数组包含从0,1,2,...,n这n+1个数中的n个数，找出这个数组中缺失的那个数
var missingNumber = function(nums) {
    var sum = (1 + nums.length) * nums.length / 2;
    for ( var i = 0; i < nums.length; i++){
        sum -= nums[i];
    }
    return sum;
};
console.log(missingNumber([0,5,4,3,1]));
