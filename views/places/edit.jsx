const React = require('react')
const Def = require('../default')

function edit(data){
    return(
        <Def>
            <main>
                <h1></h1>
                <form method="POST" action={`/places/${data.place.id}?method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor='name'>The place name:</label>
                        <input className='form-control text-center' id='name' name='name' value = {data.place.name} required></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>The place image:</label>
                        <input className='form-control text-center' type='url' id='pic' name='pic' value={data.place.pic}></input>
                        {/* type='url' */}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>The city name:</label>
                        <input className ='form-control text-center' id='city' name='city'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>The state name:</label>
                        <input className='form-control text-center' id='state' name='state'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisine:</label>
                        <input className='form-control text-center' id='cuisines' name='cuisines' required></input>
                    </div>
                    <input type='submit' className="btn btn-primary" value='Add Place'></input>
                </form>

            </main>
        </Def>
    )
}

module.exports = edit