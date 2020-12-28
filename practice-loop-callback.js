let diff =(n1,n2,callback)=>{
    let err=false
    if(n1<n2){
        err=true
    }
    callback(n1-n2,err)
}

let add=(n1,n2,callback)=>{callback(n1+n2)}
let mul=(n1,n2,callback)=>{callback(n1*n2)}
let div=(n1,n2,callback)=>{callback(n1/n2)}



diff(30,20,(diffrence,err)=>{
    if(err){
        console.log("n1 is must > n2")
    }
    else{
        console.log(diffrence)
        add(diffrence,diffrence,(sum)=>{
            console.log(sum)
            mul(sum,sum,(product)=>{
                console.log(product)
                div(product,100,(result)=>{
                    console.log("Result : " +result)
                    mul(result,result,(last)=>{console.log(last)})
                })

            })

        })
    }

})