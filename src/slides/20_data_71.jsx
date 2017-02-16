import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# this.props.children lists and keys
* The below code displays a warning a key should be provided for list items
* Assigning a key to each item allows React to quickly figure out which items changed when rerendering

\`\`\`
class Deck extends React.Component {
    
    getLabels() {
        const items = ['1', '2', '3', '4'];

         const labels = items.map((item) => {
            return <Label label={'item ' + item} />
         });

         return labels;
    }

    render() {
        return (
            <div>
                {this.getLabels()}
            </div>
        )
    }
}
\`\`\`

`);     

class Root extends React.Component {

    render() {
        return (
            <div>
                <Wrapper />
                <Deck />
            </div>
        )
    }
} 

class Deck extends React.Component {
    
    getLabels() {
        const items = ['1', '2', '3', '4'];

         const labels = items.map((item) => {
            return <Label label={'item ' + item} />
         });

         return labels;
    }

    render() {
        return (
            <div>
                {this.getLabels()}
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