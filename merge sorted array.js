var merge = function(nums1, m, nums2, n){
    var arr = [];
    var i = 0, j = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i]);
            i++;
        }
        else {
            arr.push(nums2[j]);
            j++;
        }
    }
    if (i < m) {
        while (i < m) {
            arr.push(nums1[i]);
            i++;
        }
    }
    else if (j < n) {
        while (j < n) {
            arr.push(nums2[j]);
            j++;
        }
    }
    for (var k = 0; k < m + n; k++) {
        nums1[k] = arr[k];
    }
    return nums1;
};
console.log(merge([1,4,7],3,[2,5,6],3))
