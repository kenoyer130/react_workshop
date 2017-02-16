import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# The Component State - Containers and Presentation Components Pattern
* Containers manage state and pass the current state to children Presentation Components as props
* Presentational Components are readonly that render based on props

\`\`\`
class RootContainer extends React.Component { <-- This is a Container 
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

// Presentational Components. Only have properties (and sometimes internal state no one else cares about)
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

class RootContainer extends React.Component {

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

export default RootContainer;