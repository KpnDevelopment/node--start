function sum(a,b){   //common metod of funtion design
    return a+b

}
console.log( sum(1,2))   


let sum1=(a,b) => a+b  // simple  arrow funtion without return

console.log(sum1(2,8))


let mul=(a,b) => "answer is" + a*b

console.log(mul(5,5))

let div=(a,b) => {return "divided value is : " + a/b}


console.log(div(10,5))