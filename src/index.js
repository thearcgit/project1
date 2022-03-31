const path =require('path')
const express = require('express')
const hbs=require('hbs')

// console.log(__dirname)
const app=express() 
// const staticPath=path.join(__dirname,'../public')
const templatePath=path.join(__dirname,'../template/views')
const partialPath=path.join(__dirname,'../template/partials')

// to set view engine 
app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partialPath)
// template engine route
app.get('',(req,res)=>{
    // console.log(req.query.name)
    res.render('index')
})

app.get('/about',(req,res)=>{
    // console.log(req.query.name)
    res.render('about',{
        name:req.query.name,
        temp:req.query.temp
    })
})
// app.use(express.static(staticPath))
// console.log(staticPath)
// app.get(route,callback)

app.get('/',(req,res)=>{
    res.send('hello from the express')
 
})

// app.get('/about',(req,res)=>{
//     res.send(`hello world from about`)
// })

app.get('*',(req,res)=>{
    res.render("404",{
        errorcomment:"opp's page couldn't be find"
    })
})

app.get('/about/*',(req,res)=>{
    res.render("404",{
        errorcomment2:"opp's this about page couldn't be find"
    })
})

app.listen(7000,()=>{
    console.log(`listening port at 7000`)
})

// api
// get - Read
// post - create 
// put- update 
// delete - delete 