const router = require('express').Router()
let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: 'images/ben-dutton-market-unsplash.jpg',
  author: `Ben Dutton`,
  attribute: `https://unsplash.com/@benjamiindutton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  unsplash: `https://unsplash.com/s/photos/seattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
  //Photo by <a href="https://unsplash.com/@benjamiindutton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Dutton</a> on <a href="https://unsplash.com/s/photos/seattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: 'images/rylan-hill-phoenix-unsplash.jpg',
  author: `Rylan Hill`,
  attribute: `https://unsplash.com/@rylanhill?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
  unsplash: `https://unsplash.com/s/photos/phoenix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
  //Photo by <a href="https://unsplash.com/@rylanhill?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rylan Hill</a> on <a href="https://unsplash.com/s/photos/phoenix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

}]
router.post('/', (req, res)=>{
  console.log(req.body)
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