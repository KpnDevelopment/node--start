let read = require("readline-sync");
function sum(num1,num2 ){
    var  sum;
 num1= Number( read.question("enter the number 1 = "))
 num2= Number( read.question("enter the number 2 = "))
 sum = num1+num2;
 return ("Sum of two numbers is " + sum)
}
console.log( sum())