import Slide from '../Slide';
import React from 'react'
import PNG1 from './images/medium.png'

const Body =  Slide (`
# Fun with React Dev Tools
* Since we have this workflow, we can modify the App state and trigger a rerender

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