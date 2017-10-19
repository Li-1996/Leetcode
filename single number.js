var singleNumber = function(nums) {
    var len = nums.length;
    var i = 0;
    var t = 0;
    nums.sort();
    while(i < len){
        if(nums[i] == nums[i + 1]){
            i = i + 2;
        }
        else {
            t = nums[i];
            i++;
        }
    }
    return t;
}
console.log(singleNumber([3,4,3,5,5]))