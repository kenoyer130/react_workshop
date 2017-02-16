import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# this.props.children lists and keys
* Assigning a unique key to each item fixes the issue
* Do **NOT** use ordinal (position) unless you absolutely must

\`\`\`
class Deck extends React.Component {
    
    getLabels() {
        const items = ['1', '2', '3', '4'];

         const labels = items.map((item) => {
            return <Label **key={item}** label={'item ' + item} />
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
            return <Label key={item} label={'item ' + item} />
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