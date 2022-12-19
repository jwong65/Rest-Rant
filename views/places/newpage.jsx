const React = require('react')
//Default
const Def = require('../default')

function newPage(){
    return(
        <Def>
            <main>
                <h1>Add a new place</h1>
                {/*Action sends to places back to index */}
                <form method='POST' action="/places">
                    <div className='form-group'>
                        <label htmlFor='name'>The place name:</label>
                        <input className='form-control' id='name' name='name' required></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>The place image:</label>
                        <input className='form-control' type='url' id='pic' name='pic'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cityname'>The city name:</label>
                        <input className ='form-control text-group' id='cityname' name='cityname'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='statename'>The state name:</label>
                        <input className='form-control text-center' id='statename' name='state'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisine'>Cuisine:</label>
                        <input className='form-control text-center' id='cuisine' name='cuisine' required></input>
                    </div>
                    <input type='submit' className="btn btn-primary" value='Submit'></input>
                </form>

                {/* This is the form from the assignment */}
                {/* <form method= "POST" action="/places">
                        <div>
                            <label htmlFor="name">Place Name</label>
                            <input id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="pic">Place Picture</label>
                            <input id="pic" name="pic" />
                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <input id="city" name="city" />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <input id="state" name="state" />
                        </div>
                        <div>
                            <label htmlFor="cuisines">Cuisines</label>
                            <input id="cuisines" name="cuisines" required />
                        </div>
                        <input type="submit" value="Add Place" />
                        </form> */}

            </main>
        </Def>
    )

}

module.exports = newPage