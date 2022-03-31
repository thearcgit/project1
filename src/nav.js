const express = require('express')

const app = express()

const port =3000
app.get('/',(req,res)=>{
    // res.send('<h1>welcome to my home page</h1>')
    res.write('<h1>welcome to my home page</h1>')
    res.send()
})
app.get('/about',(req,res)=>{
    res.status(200).send(`welcome to about page`)
})
app.get('/contact',(req,res)=>{
    res.send(`welcome to contact page`)
})
app.get('/temp',(req,res)=>{
    // res.write(`welcome to temp page`)
    res.send([{
        id:123,
        name:'arc'
    },
    {
        id:12,
        name:'arc'
    },
    {
        id:1,
        name:'arc'
    }
])
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})


