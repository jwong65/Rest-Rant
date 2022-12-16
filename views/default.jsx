const React = require('react')

//Function  with html as parameter
function Def(html){
    return(
        <html>
            <head>
                <title>Default Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )

}

//Def is exported.
module.exports = Def