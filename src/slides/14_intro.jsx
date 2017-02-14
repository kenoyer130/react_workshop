import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# REACT!!!

* The basic building block of React is a Component

\`\`\`
class Hello extends React.Component {

    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
} 
\`\`\`

`);     

class Hello extends React.Component {

    render() {
        return (
            <div>
                <Wrapper />
                <div className='react'>
                    Hello World!
                </div>
            </div>
        )
    }
}  

export default Hello;
