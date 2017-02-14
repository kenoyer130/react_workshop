import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# The Component State
* The State contains the component's mutable data (data the can change local to the component)
* Any changes to the State data triggers a rerender of the component
* Bests practice is to initialize the state in the constructor

\`\`\`
class Root extends React.Component {

    constructor(props) {
        super(props);

        this.state = { <-- initialize state
            label: ''
        }
    }

    onclick = () => {
        this.setState({ <-- updating state
            label: 'Something was clicked!'
        });
    }

     render() {
        return (
            <div>
                <Label label={this.state.label} /> <-- accessing current state
                <Hello onclick={this.onclick}/>
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