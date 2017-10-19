var rotate  = function(nums, k){
    var arr = [];
    var j = 0;
    for(var m = nums.length - k; m < nums.length; m++)
    {
        arr[j] = nums[m];
        j++;
    }
    for(var i = 0; i <= nums.length - k - 1; i++){
        arr[j] = nums[i];
        j++;
    }
    nums = arr;
    return nums;
};
console.log(rotate([1,2],1));
