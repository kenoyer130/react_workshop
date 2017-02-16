import Slide from '../Slide';
import React from 'react'
import PNG from './images/lifecycle.png'
import PNG1 from './images/medium.png'

const Body =  Slide (`
# Application State
## **THIS IS THE CORE OF UNDERSTANDING REACT**
* As we follow this pattern the application state ends up hoisted to the root in one Store.
* The Components fire events which modify the Store
* The new State (since we cannot modify just copy) is passed back down and triggers a rerender
* This defines the React Unidirectional data flow
`);     

class Wrapper extends React.Component {

    render() {
        return (
            <div>
                <Body />
                <div><i>Image from https://medium.com/@arqex/react-the-simple-way-cabdf1f42f12#.18kn7byai</i>></div>
                <img src={PNG1} alt='img'/>
            </div>
        )
    }
}  

export default Wrapper;