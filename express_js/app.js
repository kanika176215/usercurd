const {response} = require("express")
const express = require("express")
const app = express()       //function calling
const port=3000
const userRoutes=require("./app/routes/user")


//basic use
app.use(express.json())
app.use(userRoutes)
//routes


//routes
app.listen(3000,()=>{
    console.log(`server is running on ${port}`)
})