import Slide from '../Slide';
import React from 'react'
import PNG from './images/tree.png'

const Body =  Slide (`
# React Components
* Much like the Browser DOM, these components form a tree
* There must be a root Component


`);     

class Wrapper extends React.Component {

    render() {
        return (
            <div>
                <Body />
                <img src={PNG} alt='img'/>
            </div>
        )
    }
}  

export default Wrapper;