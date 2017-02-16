import Slide from '../Slide';
import React from 'react'
import PNG1 from './images/next.png'

const Body =  Slide (`
# Application State
* For real world applications we would use other libraries to manage state, actions, fetching data etc
* Way, way outside the scope of this workshop
`);     

class Wrapper extends React.Component {

    render() {
        return (
            <div>
                <Body />
                <img src={PNG1} alt='img'/>
            </div>
        )
    }
}  

export default Wrapper;