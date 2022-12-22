const router = require('express').Router()
const places = require('../models/places')
router.post('/', (req, res)=>{
  //console.log(req.body)
  
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
    req.body.author = 'Placekitten'
    req.body.attribute = 'https://placekitten.com'
    req.body.unsplash = req.body.pic
    req.body.site = 'Placekitten'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }

  //Push into places
  places.push(req.body)
  
  res.redirect('/places')
})

router.get('/new', (req, res)=>{
  res.render('places/newpage')
})


router.get('/', (req, res)=>{
    //res.send('GET /places')
    //placeholder information copied over.
    
    res.render('places/index', {places})
})
router.get('/:id', (req, res) => {
  //id has to be definied
  let id = Number(req.params.id)
  
  // This is for when the number of id isnt a number
  if (isNaN(id)){
    res.render('404')
  }
  //This statement is if the id isn't there
  else if(!places[id]){
    res.render('404')
  }
  else{
    res.render('places/show', {place: places[id]})
  }
  
})
// This is the edit.jsx
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('404')
  }
  else if (!places[id]){
    res.render('places/edit')
  }
  else{
    res.render('places/edit', {place: places[id]})
  }
})


// router.get('places/:id',(req,res)=>{
//   res.send('Placeholder for details')
// })

module.exports = router