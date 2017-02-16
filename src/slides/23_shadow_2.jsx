import Slide from '../Slide';
import MEME from './images/ninja.jpg'
import React from 'react'

const Body  =  Slide (`
# The Shadow DOM
## ENTER THE SHADOW DOM
*Your DOM changes are no match for my Shadow Dom style*
* On a render pass the changes are actually applied to the *Shadow Dom* not the actual DOM.
* After all components have rendered the diff is applied to the actual DOM
* Only the actual elements that changed are rerendered
* The code reads as a single render pass so developers can reason about it
* This is why immutablility is important. That way React can quickly figure out what changed
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