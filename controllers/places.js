const router = require('express').Router()

router.get('/', (req, res)=>{
    //res.send('GET /places')
    //placeholder information copied over.
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
        pic: 'http://placekitten.com/350/350'
      }]
      
    res.render('places/index', {places})
})
module.exports = router