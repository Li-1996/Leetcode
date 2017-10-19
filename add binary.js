var addBinary = function(a,b){
    a = parseInt(a,2);
    b = parseInt(b,2);
    var c = a + b;
    return c.toString(2);
};
console.log(addBinary(11,1));