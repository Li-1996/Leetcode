//找到字符串数组中最长的公共前缀
var longestCommonPrefix = function(strs) {
   var i =1;
    var prefix =strs[0];
    var len = strs.length;
    while(i < len){
        prefix = compare(prefix, strs[i])
        i++;
    }
    return prefix;
};
var compare = function (a,b){
    while(b.indexOf(a) != 0){
        a = a.substr(0, a.length-1);
    }
    return a;
}
console.log(compare("abc","ac"))