const React = require('react')
const Def = require('../default')

// data argument includes place information
function show(data){
    return(
        <Def>
            <main>
            <div>
            <img src= {data.place.pic} alt={data.place.name}/>
                <h1>
                    {data.place.name}
                </h1>
                <h3>
                Located in {data.place.city}, {data.place.state}
                </h3>
            </div>
                <h2>
                    Reviews
                </h2>
                <h3>Description</h3>
                <h4>
                    
                </h4>
            </main>
            <div>
                <h3>Comments</h3>
            </div>
        </Def>
    )
}

// name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: 'images/ben-dutton-market-unsplash.jpg',
//     author: `Ben Dutton`,
//     attribute: `https://unsplash.com/@benjamiindutton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
//     unsplash: `https://unsplash.com/s/photos/seattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
//     site: 'Unsplash'
//     //Photo by <a href="https://unsplash.com/@benjamiindutton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Dutton</a> on <a href="https://unsplash.com/s/photos/seattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

module.exports=show