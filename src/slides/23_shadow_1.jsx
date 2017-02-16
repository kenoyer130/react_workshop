import Slide from '../Slide';
import MEME from './images/dmeme.jpg'
import React from 'react'

const Body  =  Slide (`
# The Shadow DOM

`);     
  
class Wrapper extends React.Component {

    render() {
        return (
            <div>
                <Body />
        
                <img src={MEME} alt='img'/>
            </div>
        )
    }
}  

export default Wrapper;