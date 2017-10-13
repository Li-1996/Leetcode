//罗马数字转换为整数
var romanToInt = function(s) {
    var len = s.length;
    var res = 0;
    for(var i = 0; i < len; i++) {
        switch(s.charAt(i)){
            case 'M': res = res + 1000; break;
            case 'D': res = res + 500; break;
            case 'C': {
                if((i < len-1) && (s.charAt(i+1) == 'D' || s.charAt(i+1) == 'M')) res -= 100;
                else res = res + 100;
                break;
            }
            case 'L': res = res + 50;break;
            case 'X':{
                if ((i < len - 1) && (s.charAt(i+1) == 'L' || s.charAt(i+1) == 'C')) res = res - 10;
                else res = res + 10;
                break;
            }
            case 'V':res = res + 5;break;
            case 'I':{
                if ((i < len - 1) && (s.charAt(i+1) == 'V' || s.charAt(i+1) == 'X')) res =res - 1;
                else res =res + 1;
                break;
            }
        }
    }
    return res;
};
console.log(romanToInt("LD"));