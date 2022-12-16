const express = require('express')
const app = express()

require(`dotenv`).config()

//JSX 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res)=>{
    //Will render home.jsx
    res.render('home')
    //res.send('This is the first page')
})


//Use this to get any page that doesn't reach any path
app.get('*',(req,res)=>{
    res.status(404).send("<h1>THIS IS A 404</h1>")
})

app.listen(process.env.PORT)