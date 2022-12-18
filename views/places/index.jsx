const React =  require('react')
const Def = require('../default')

function places(placesinfo){
    let placeFormat =placesinfo.places.map((place)=>{
        return(
            <Def>
                <div className='col-sm-6'>
                    {/* <h1>Places</h1> */}
                    <h2>{place.name}</h2>
                    <p className='text-center'>
                        {place.cuisines}
                    </p>
                    <img src = {place.pic} alt = {place.name} className={place.city}></img>
                    <div>
                        Photo by <a href={place.attribute}>{place.author}</a> on <a href={place.unsplash}>Unsplash</a>
                    </div>
                    <p className='text-center'>
                        Located in {place.city}, {place.state}
                    </p>
                </div>
            </Def>
        )
    })
    return(
        <Def>
            <main>
                <h1> Plaecs Index Page</h1>
                <div className='row'>
                    {placeFormat}
                </div>
                
            </main>
        </Def>
    )
}

module.exports = places