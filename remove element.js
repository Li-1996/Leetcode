var removeElement = function(nums, val){
   var len = nums.length;
    var j = 0;
    for(var i = 0; i < len; i++){
        if(nums[i] != val){
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};
console.log(removeElement([1,3,4,3,5], 4))
