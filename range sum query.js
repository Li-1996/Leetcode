var NumArray = function(nums) {
    var len = nums.length;
    this.dp = new Array(len);
    for(var i=0; i<len; i++){
        if(i===0) this.dp[i] = nums[i];
        else this.dp[i] = this.dp[i-1] + nums[i];
    }
};
NumArray.prototype.sumRange = function(i, j) {
    if(i===0) return this.dp[j];
    else return this.dp[j] - this.dp[i-1];
};