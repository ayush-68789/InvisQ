const express = require('express') ; 
const app = express() ;
require('dotenv').config() ; 

const connectDB = require('./config/db') ; 
const queueRoutes = require('./Routes/queue.routes') ; 

app.use(express.json()) ;
app.use('/api', queueRoutes) ; 

connectDB() ;

const PORT = process.env.PORT ; 
app.listen(PORT , ()=>{
    console.log(`----------------Server Running at Port : ${PORT}----------------`) ; 
})