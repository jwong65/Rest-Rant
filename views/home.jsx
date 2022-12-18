const React = require('react')
const Def = require('./default')


function home(){
    return(
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/allec-gomes-strawberry-unsplash.jpg"></img>
                </div>
                {/* Button that sends you to the places route */}
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )

}

//Home exported.
module.exports = home