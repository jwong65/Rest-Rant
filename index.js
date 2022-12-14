const express = require('express')
const app = express()

require(`dotenv`).config()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res)=>{
    res.send('This is the first page')
})


//Use this to get any page that doesn't reach any path
app.get('*',(req,res)=>{
    res.status(404).send("<h1>THIS IS A 404</h1>")
})

app.listen(process.env.PORT)