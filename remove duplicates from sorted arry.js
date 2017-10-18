var removeDuplicates = function(nums) {
    if( nums.length == 0) return 0;
    var i = 0;
    for(var j = 1; j < nums.length; j++){
        if(nums[i] != nums[j])
            i++;
            nums[i] = nums[j];
        console.log(nums[i]);
    }
    return i + 1;

};
console.log(removeDuplicates([4,4,5,6,7]));