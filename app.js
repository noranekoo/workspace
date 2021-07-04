const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Auth = require('./controllers/auth')
require('dotenv').config()

//Routes
const UserRouter = require('./routes/user.route')
const ProjectRouter = require('./routes/project.route')
//MongoDB connection
mongoose.connect(`${process.env.MONGODB}`, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false, useCreateIndex: true})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
//CORS
app.use(cors())
//Allow all website access XMLHttpRequest
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    
    next();
})



//Body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/user',UserRouter)
app.use('/api/project',ProjectRouter)

//app.use('/user',)


module.exports = app