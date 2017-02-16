import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# The Component State - Stateless Components Functions
* If a Component does not use any lifecycle methods and only renders based on props, it can be made into a Stateless Component
* More consise code
* Currently does not render faster but React team has API compatible upgrade planned that will make them render faster and use less memory.

\`\`\`
// stateless component versions

const Label = (props) => {
    return (
        <div className='react'>{props.label}</div>
    );
}

const Hello = (props) => {
     return (
            <div className='react'>
                <input 
                    type='button' 
                    value='Click Me' 
                    onClick={this.props.onclick}
                    />
            </div>
    );
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

const Label = (props) => {
    return (
        <div className='react'>{props.label}</div>
    );
}

const Hello = (props) => {
     return (
            <div className='react'>
                <input 
                    type='button' 
                    value='Click Me' 
                    onClick={props.onclick}
                    />
            </div>
    );
}

export default Root;