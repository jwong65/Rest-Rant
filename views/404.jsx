const React = require('React')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1> 404: This page is not found</h1>
                <p> We cannot find this page</p>
                <div>
                    <img src="images/jason-hogan-freedom-unsplash.jpg" alt='freedom' className='mountainpic'></img>
                </div>
            </main>
        </Def>
    )
}

//Exporting error404
module.exports = error404