/**
 * Created by Administrator on 2017/10/13.
 */
var twoSum = function(nums, target) {
    var len=nums.length;
    for(var i = 0; i < len - 1; i++)
        for(var j = i + 1; j < len; j++ )
            if(nums[i] + nums[j] == target)
                return[i, j];
};
console.log(twoSum([2,7,9,10],9))