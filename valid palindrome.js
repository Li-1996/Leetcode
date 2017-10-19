var isPalindrome = function (s) {
    //正则表达式去掉所有空格和标点
    var str = s.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
    str = str.toLowerCase();
    var arr1 = str.split("");
    var str1 = arr1.join("");
    var arr2 = arr1.reverse("");
    var str2 = arr2.join("");
    if (str1 == str2) return true;
    else return false;
};
console.log(isPalindrome("Ab,ccba"))