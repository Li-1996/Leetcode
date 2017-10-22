//两个字符串，判断一个字符串能不能通过字符调换位置得到另一个字符串
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    var arr1 = s.split(""); //将字符串拆分为数组
    arr1.sort(); //按字母顺序排序
    var arr2 = t.split("");
    arr2.sort();
    console.log(arr2);
    if(arr1.join("") == arr2.join("")){ //join，将数组中的所有元素放入一个字符串
        console.log(arr2);
        return true;
    }
    else return false;
};
console.log(isAnagram("abcde", "edcab"));