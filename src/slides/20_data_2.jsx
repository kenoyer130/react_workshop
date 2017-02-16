import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# React Props
* Parameters that are passed into the component
* Accessed with this.props
* Are readonly. Cannot be changed
* If the parent passes in a changed property value, a component rerender is trigger.
* You want to use props as much as possible versus state

\`\`\`
class Hello extends React.Component {

    render() {
        return (
            <div>
                Clicked {this.props.y} times <-- note { } JSX to render javascript
            </div>
        )
    }
}  
\`\`\`
`);     

class Root extends React.Component {

    constructor() {
        super();
        this.state = {y:0};
    }

    clickme = () => {
        this.setState({...this.state, y: ++this.state.y});
    }

    render() {
        return (
            <div>
                <Wrapper />
                <input type='button' value='Click Me' onClick={this.clickme} />
                <p/>
                <Hello  y={this.state.y} />
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

export default Root;