// var hello=function(data){
//     console.log("Data:"+data)
// }
// var hey=function(callback){
//     callback('vishnu')
// }
// hey(hello)

var hello=(data)=>{console.log("Data="+data)}

var hey=(callback)=>{callback("vishnu")}
hey(hello)