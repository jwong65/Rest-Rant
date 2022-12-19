const router = require('express').Router()
const places = require('../models/places')
router.post('/', (req, res)=>{
  console.log(req.body)
  
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }

  //Push into places
  places.push(req.body)
  
  res.send('POST /places')
})


router.get('/', (req, res)=>{
    //res.send('GET /places')
    //placeholder information copied over.
    
    res.render('places/index', {places})
})
router.get('/new', (req, res)=>{
  res.render('places/newpage')
})

// router.get('places/:id',(req,res)=>{
//   res.send('Placeholder for details')
// })

module.exports = router