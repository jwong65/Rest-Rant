const React = require('express')
//Default
const Def = require('../default')

function newPage(){
    return(
        <Def>
            <main>
                <h1>Add a new place</h1>
            </main>
        </Def>
    )

}

module.exports = newPage