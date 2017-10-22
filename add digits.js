var addDigits = function(num) {
   while(num >= 10){
       var num1 = num % 10;
       var num2 = Math.floor(num / 10);
       var num = num1 + num2;
   }
    return num;
}
console.log(addDigits(345))
