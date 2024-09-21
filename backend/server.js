const express= require('express')
require('dotenv').config()
const workoutRoutes= require('./routes/workout')
const mongoose=require('mongoose')

const app = express()
   
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
        
    app.listen(process.env.PORT,()=>{
        console.log('connected to a db ||listening to port 4000')
    })
        })
        .catch((error)=>{
            console.log(error)
        })
    
//middleware
app.use('/api/workouts',workoutRoutes)

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
})


app.get('/',(req,res)=>{
    res.json({mssg:'welcome to app'})
})