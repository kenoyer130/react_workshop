import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# The Component State - Hoisting
* If other components need to know the state of another component, *Hoist* the state to a parent shared component

\`\`\`

// State has been HOISTED from the children components to a wrapping Container
// State is passed to children through props
class Root extends React.Component { 
   constructor(props) {
        super(props);

        this.state = {
            label: ''
        }
    }

    onclick = () => {
        this.setState({
            label: 'Something was clicked!'
        });
    }

    render() {
        return (
            <div>
                <Label label={this.state.label} />
                <Hello onclick={this.onclick}/>
            </div>
        )
    }
} 

// Children only have properties
class Label extends React.Component {
    render() {
        return (
            <div className='react'>{this.props.label}</div>
        );
    }
}

class Hello extends React.Component {

    render() {
        return (
            <div className='react'>
                <input 
                    type='button' 
                    value='Click Me' 
                    onClick={this.props.onclick}
                    />
            </div>
        )
    }
} 
\`\`\`

`);     

class Root extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: ''
        }
    }

    onclick = () => {
        this.setState({
            label: 'Something was clicked!'
        });
    }

    render() {
        return (
            <div>
                <Wrapper />
                <Label label={this.state.label} />
                <Hello onclick={this.onclick}/>
            </div>
        )
    }
} 

class Label extends React.Component {
    render() {
        return (
            <div className='react'>{this.props.label}</div>
        );
    }
}

class Hello extends React.Component {

    render() {
        return (
            <div className='react'>
                <input 
                    type='button' 
                    value='Click Me' 
                    onClick={this.props.onclick}
                    />
            </div>
        )
    }
} 

export default Root;