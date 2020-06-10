//Import modules and Libs
import React from 'react'
import ReactDom from 'react-dom'

//Create component
/*const App = () => {
    return <div>Hola mundo</div>
}*/

class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <h1>Hola</h1><h2>mundo</h2>
            </div>
        )
    }
}

//Render
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)