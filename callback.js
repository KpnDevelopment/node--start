// var dt=new Date()
// console.log('hello')
// for(i=0;i<1000;i++){
//     console.log('loop')
// }
// console.log('end')
// var diff=new Date() - dt
// console.log(diff)

function longTask(milliSecond){
    dt = new Date()
    while((new Date - dt) <= milliSecond ){

    }
}
function showEnd(){
    console.log('end')
}
console.log('sarted')
setTimeout(showEnd,2000)

console.log('sarted')
setTimeout(showEnd,2000)

console.log('sarted')
setTimeout(showEnd,2000)
