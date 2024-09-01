const express = require("express")
const path = require("path")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const basicAuth = require("express-basic-auth")

const EnvUserName = process.env.AUTHNAME
const EnvPass = process.env.AUTHPASS


/**app.use(basicAuth({
    challenge:true,
    unauthorizedResponse:()=>{
        return "Unauthorized"
    },
    authorizer:(username,password)=>{
        const userMatch = basicAuth.safeCompare(username,String(EnvUserName))
        const passMatch = basicAuth.safeCompare(password,String(EnvPass))
        return userMatch && passMatch
    }
}))**/
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
