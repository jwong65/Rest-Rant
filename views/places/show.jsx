const React = require('react')
const places = require('.')
const Def = require('../default')

// data argument includes place information
function show(data){
    let comments = (<h3 className='inactive'>There are no comments about this place.</h3>)
    if (data.place.comments.length){
        comments = data.place.comments.map( c=>{
            return(
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave'}</h2>
                    <h4>{c.content}</h4>
                    <h3>By - {c.author}</h3>
                    <h4>Rating : {c.star}</h4>
                </div>
            )
        })
    }
    return(
        <Def>
            <main>
            <div>
            <img src= {data.place.pic} alt={data.place.name}/>
                <h1>
                    {data.place.name}
                </h1>
                <h3>
                Located in {data.place.city}, {data.place.state} serving {data.place.cuisines}
                </h3>
            </div>
                <h2>
                    Reviews
                </h2>
                <h3>Description</h3>
                <h4>
                    {data.place.showEstablished()}
                </h4>
            </main>
            <div>
                <h3>Comments</h3>
                {comments}
                
            </div>
            <a href={`/places/${data.id}/edit`} className='bth btn-warning'>Edit</a>
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>Delete</button>
            </form>
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