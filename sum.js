var read = require("readline-sync");
var a = read.question("enter a = ");
var b = read.question("enter b = ");

if(a>b){
    console.log('the larger number is  ' + a)
}
else if(a===b){
    console.log( "two numbers are equal")
}
else {
    console.log("the larger number is  "+ b)
}
