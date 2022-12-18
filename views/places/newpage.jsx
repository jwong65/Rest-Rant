const React = require('react')
//Default
const Def = require('../default')

function newPage(){
    return(
        <Def>
            <main>
                <h1>Add a new place</h1>
                {/* Action sends to places back to index */}
                <form method='POST' action="/places">
                    <div>
                        <label htmlFor='name'>The place name:</label>
                        <input id='name' name='name' required></input>
                    </div>
                    <div>
                        <label htmlFor='pic'>The place image:</label>
                        <input type='url' id='pic' name='pic'></input>
                    </div>
                    <div>
                        <label htmlFor='cityname'>The city name:</label>
                        <input id='cityname' name='cityname'></input>
                    </div>
                    <div>
                        <label htmlFor='statename'>The state name:</label>
                        <input id='statename' name='state'></input>
                    </div>
                    <div>
                        <label htmlFor='cuisine'>Cuisine:</label>
                        <input id='cuisine' name='cuisine'></input>
                    </div>
                    <input type='submit' value='Submit'></input>
                </form>
            </main>
        </Def>
    )

}

module.exports = newPage