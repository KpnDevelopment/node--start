const express = require('express')
const path=require('path')


const app=express()

app.use((req,res,next)=>{console.log('hello'),next()})   //use funtion use cheyyumbol next marakkaruthe

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'index.html')))

app.get('/signup', (req,res) => res.sendFile(path.join(__dirname, 'signup.html')))

app.get('/about', (req,res) => res.send('about'))

app.listen('3000', () => console.log('server started'))