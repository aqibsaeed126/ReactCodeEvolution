import React from 'react'

const Hello = (props) => {
    
    return (
        <div>
            <h1> Hello {props.name} a.k.a {props.heroName} </h1>
            {props.children}
        </div>
    )

    // return React.createElement('div', {id: 'hello'}, React.createElement('h1', null, 'Hello Aqib'))
}

export default Hello;