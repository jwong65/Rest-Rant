const express = require('express')
const app = express()

require(`dotenv`).config()

//JSX 
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//To refer to the public directory
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res)=>{
    //Will render home.jsx
    res.render('home')
    //res.send('This is the first page')
})


//Use this to get any page that doesn't reach any path
app.get('*',(req,res)=>{
    //res.status(404).send("<h1>THIS IS A 404</h1>")
    //This render will grab 404.jsx
    res.render('404')
})

app.listen(process.env.PORT)