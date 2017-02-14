import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# Communicating with the outside world
* Well how do we communicate changes to other components?
* Through events, which are callback functions passed in as part of the props
* We will return to this example later with regards to Containers and Presentational Components

\`\`\`
class Root extends React.Component {
    ...

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