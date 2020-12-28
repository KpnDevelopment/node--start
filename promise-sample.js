// function add (num1,num2,callback){
//     let err=false
//     if(num1==0){
//         err=true
//     }
//     callback(num1+num2,err)

// }
// function mul(num1,num2,callback){
//     callback(num1*num2)
// }
// function div(num1,num2,callback){
//     callback(num1/num2)
// }
// let diff =(num1,num2,callback)=>{callback(num1-num2)}


// add(20,20,(sum,err)=>{
//     if(err){
//         console.log("error:first num> 0")
//     }
//     else{
//         console.log(sum)
//         mul(sum,sum,(product)=>{
//             console.log(product)
//             div(product,400,(result)=>{
//                 console.log(result)
//                 diff(result,2,(diffrence)=>{
//                     console.log(diffrence)
//                 })
//             })
//         })
//     }
// })

const { resolve, reject } = require('promise')
const Promise = require('promise')

let add=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
    
        if(num1==0){
            reject("error require")
        }
        resolve(num1+num2)

    })
}
let mul=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
    
        if(num1==0){
            reject("error require")
        }
        resolve(num1*num2)

    })
}

let div=(num1,num2)=>{
    return new Promise((resolve,reject)=>{
    
        if(num1==0){
            reject("error require")
        }
        resolve(num1/num2)

    })
}

add(10,20).then((sum)=>{
    console.log(sum)
    return mul(sum,sum)
    
}).then((product)=>{
    console.log(product)
   return  div(product,90)
}).then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})