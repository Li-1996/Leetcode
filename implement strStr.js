var strStr = function(haystack, needle){
    var len1 = haystack.length;
    var len2 = needle.length;
    var i = 0;
    for (i = 0; i <= len1 - len2; i++){
        if(haystack.substr(i, len2) == needle) return i;
    }
    return -1;
}
console.log(strStr("abc","c"));
