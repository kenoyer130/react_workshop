import Slide from '../Slide';
import React from 'react'



const Body =  Slide (`
# Controlled Component
* Form input the React way
* You don't ask a component a question like "what is your current value"
* The component updates the state as the value changes
* The state is always current
`);     

const Code = Slide(`

\`\`\`
class Root extends React.Component {
   ...
    onChange = (event) => {
        const value = event.target.value;

        if(!Number(value)) {
            return;
        }

        this.setState({...this.state, value: value});
    }

      render() {
        return (
            <div>
               <NumberInput value={ this.state.value} onChange={this.onChange}/>
               <Label label={this.state.value} />
            </div>
        )
    }
}

class NumberInput extends React.Component {
      render() {
        return (
            <div>
                Numbers Only Sir!<br/>
                <input type='text' value={this.props.value} onChange={this.props.onChange} />
            </div>
        )
    }
}

\`\`\`
`);

class Root extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        };
    }

    onChange = (event) => {
        const value = event.target.value;

        if(!Number(value)) {
            return;
        }

        this.setState({...this.state, value: value});
    }

      render() {
        return (
            <div>
                <Body />
                <div className='react'>
                    <NumberInput value={ this.state.value} onChange={this.onChange}/>
                    <p/>
                    <div>Current State: <Label label={this.state.value} /></div>
               </div>
               <Code />
            </div>
        )
    }
}

class NumberInput extends React.Component {
      render() {
        return (
            <div>
                Numbers Only Sir!<br/>
                <input type='text' value={this.props.value} onChange={this.props.onChange} />
            </div>
        )
    }
}

class Label extends React.Component {
    render() {
        return (
            <div>
              {this.props.label}
            </div>
        )
    }
}

export default Root;