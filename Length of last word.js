var lengthOfLastWord = function(s){
    var res = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            if (i != 0 && s[i - 1] == ' ') res = 1;
            else res++;
        }
    }
    return res;
};
console.log(lengthOfLastWord("     "));