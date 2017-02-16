import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# React PropTypes
* Allows you to define expected props for you component

\`\`\`
class Hello extends React.Component {

    render() {
        return (
            <div>
                Clicked {this.props.y} times 
            </div>
        )
    }
}  

Hello.propTypes = {
    y: React.PropTypes.number.isRequired
}

// These will all throw warnings
<Hello/>
<Hello y='test' />

\`\`\`
`);     

class Root extends React.Component {

    render() {
        return (
            <div>
                <Wrapper />
                <Hello/>
                <Hello y='test' />
            </div>
        )
    }
}  

class Hello extends React.Component {

    render() {
        return (
            <div className='react'>
                Clicked {this.props.y} times
            </div>
        )
    }
}  

Hello.propTypes = {
    y: React.PropTypes.number.isRequired
}

export default Root;