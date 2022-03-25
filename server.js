
const express= require('express')
const userRoutes= require('./src/cubeUser/routes')
const formRoutes= require('./src/cubeForm/routes')

const app=express()
const port=3000

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hello, world!")
})

app.use('/cubeUser',userRoutes)
app.use('/cubeForm',formRoutes)
app.listen(port,()=>console.log(`app listening on port ${port}`))
