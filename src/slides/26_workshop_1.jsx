import Slide from '../Slide';
import Mock from './images/mock.png'
import React from 'react'

const Body  =  Slide (`
# Workshop time!
* First read "Thinking in React". Read this every time you start a new React project! (It's short)
    * https://facebook.github.io/react/docs/thinking-in-react.html
* From http://todomvc.com/examples/react/#/

* start simple!

\`\`\`
`);     

class Wrapper extends React.Component {

    render() {
        return (
            <div>
                <Body />
        
                <img src={Mock} alt='img' />
            </div>
        )
    }
}  

export default Wrapper;