
const { config } = require('dotenv')
config()
const express= require('express')
const app= express()

const port= 3000 || process.env.PORT

app.get("/" , (req , res)=>{
    res.send("home route")
} )
console.log('my name' , process.env.NAME_MY )
app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})