var searchInsert = function(nums, target) {
    var len = nums.length;
    var begin = 0;
    var end = len - 1;
    while(begin <= end){
        var mid = Math.floor(begin + (end - begin)/2);
        if(nums[mid] == target) return mid;
        if(nums[mid] < target) begin = mid + 1;
        else end = mid - 1;
    }
    if(nums[begin] < target)
    return begin + 1;
    else return begin;
};
console.log(searchInsert([1,2,4],3));
