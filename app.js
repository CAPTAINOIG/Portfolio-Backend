const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')
let contactRouter = require('./routes/contact.route')
const contactModel = require('./model/contact.model')

app.use(cors())
app.use(express.urlencoded({extended:true,limit:'50mb'}))
app.use(bodyParser.urlencoded({extended: true,limit:'50mb'}))
app.use(express.json({limit:'50mb'}))
app.use('/contact',contactRouter)

require ('./connection/mongoose.connection')



app.listen('4444',()=>{
    console.log('listening here');
})
