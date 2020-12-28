let http = require("http")
let fs=require("fs")
let url = require("url")

// http.createServer( function (req,res) {
//     res.write("Server Started ")
//     res.end()
// }).listen(3001)

http.createServer((req,res)=>{

    let q=url.parse(req.url,true)   //true nirbhandhamane
    // console.log(q.pathname)
    if(q.pathname==='/'){

 

    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })

}
else if(q.pathname==='/signup'){

    fs.readFile('signup.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}
else if(q.pathname==='/signupaction'){
    console.log(q.query.fname)  //qurey ane data call cheyyan upayogikkua,serveril kanikkanum
    console.log(q.query.lname)
    console.log(q.query.mobile)
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('<h1>'+'Hi'+'  '+ q.query.fname +'</h1>' )
    res.end()

}
    else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('error')
        res.end()
    }
}).listen(3002,() => console.log("server start"))
// function server(req,res) { 
//     res.write("Server Start ")
//     res.end()
// }