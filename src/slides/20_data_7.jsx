import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# this.props.children
* A components Props have a special collection children
* This allows access to the direct descendent Components as an array or single element

**GOTCHA**

* The children can either be a single element or an array for performance reasons.

\`\`\`
...
<Deck selected={this.state.selected}> 
    <Label label={"Item 1"} />
    <Label label={"Item 2"} />
    <Label label={"Item 3"} />
    <Label label={"Item 4"} />
</Deck>
...

class Deck extends React.Component {
    render() {
        return (
            <div>
                {this.props.children[this.props.selected]}
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
            selected: 0
        }
    }

    onclick = () => {
        let selected = ++this.state.selected;

        if(selected === 4) {
            selected = 0;
        }

        this.setState({
            selected: selected
        });
    }

    render() {
        return (
            <div>
                <Wrapper />
                <Deck selected={this.state.selected}> 
                    <Label label={"Item 1"} />
                    <Label label={"Item 2"} />
                    <Label label={"Item 3"} />
                    <Label label={"Item 4"} />
                </Deck>
                <input type='button' value='Next' onClick={ this.onclick } />
            </div>
        )
    }
} 

class Deck extends React.Component {
    render() {
        return (
            <div>
                {this.props.children[this.props.selected]}
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

export default Root;