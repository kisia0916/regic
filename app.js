const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join('public')));

app.get("/",(req,res)=>{
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath)
})
app.get("/login",(req,res)=>{
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath)
})
app.get("/home",(req,res)=>{
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath)
})
app.get("/workspace",(req,res)=>{
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath)
})

app.listen(3000,()=>{
    console.log("server run")
})