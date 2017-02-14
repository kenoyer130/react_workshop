import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# Default Prop Values
* By setting the getDefaultProps funtion we can initialize our component properties

\`\`\`
class Hello extends React.Component {

    render() {
        return (
            <div>
                Your name is {this.props.name}
            </div>
        )
    }
}  

Hello.propTypes = {
    name: React.PropTypes.string.isRequired
}

Hello.defaultProps = {
        name: 'John Smith'
}
\`\`\`

`);     

class Root extends React.Component {

    render() {
        return (
            <div>
                <Wrapper />
                <Hello/>
            </div>
        )
    }
} 

class Hello extends React.Component {

    render() {
        return (
            <div className='react'>
                Your name is {this.props.name}
            </div>
        )
    }
}  

Hello.propTypes = {
    name: React.PropTypes.string.isRequired
}

Hello.defaultProps = {
        name: 'John Smith'
}

export default Root;