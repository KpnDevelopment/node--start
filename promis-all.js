const { resolve, reject } = require('promise')
const Promise = require('promise')

let getName=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("vishnu")
        },3000)
    })
}
let  getMobile=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("2255")
        },2000)
    })
}

//promise all methode use cheyyumbol funtions paralel ayi work cheyyunnu ..working time kuravayirikkum

// Promise.all([getName(),getMobile()]).then((result)=>{
//     console.log(result)
// })

//async us echeyyumbol 2 time outum serial ayi work cheyyum ..working time kooduthalane 3+2=5s

async function getUser(){  //async use cheyyunnathe asyncronise ayi work cheyyanane
    let name=await getName()  //await codukkumbol marathrame 3000ms wait cheyyu
    console.log(name)
    let mob=await getMobile()
    console.log(mob)
}
getUser()