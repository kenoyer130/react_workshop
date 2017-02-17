import Slide from '../Slide';
import React from 'react'



const Body =  Slide (`
# Showing a dialog the React way
* Follow the uni-directional data flow
* Controlled by state just like every thing else
`);     

const Code = Slide(`

\`\`\`
class Root extends React.Component {
    ...

    onClick = (event) => {
        this.setState({...this.state, dialogDisplayed: !this.state.dialogDisplayed});
    }

    render() {
        return (
            <div>
                <Body />
                <Show onClick={this.onClick}/>
                <div className='react'>
                    <p/>
                    <div>{this.state.dialogDisplayed?<Dialog /> : null }</div>
                </div>
                <Code />
            </div>
        )
    }
}

class Show extends React.Component {
      render() {
        return (
            <div>
                <input type='button' value='Show dialog' onClick={this.props.onClick} />
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
            dialogDisplayed: false
        };
    }

    onClick = (event) => {
        this.setState({...this.state, dialogDisplayed: !this.state.dialogDisplayed});
    }

    render() {
        return (
            <div>
                <Body />
                <Show onClick={this.onClick}/>
                <div className='react'>
                    <p/>
                    <div>{this.state.dialogDisplayed?<Dialog /> : null }</div>
                </div>
                <Code />
            </div>
        )
    }
}

class Show extends React.Component {
      render() {
        return (
            <div>
                <input type='button' value='Show dialog' onClick={this.props.onClick} />
            </div>
        )
    }
}

class Dialog extends React.Component {
    render() {
        return (
            <div>
                Pretend I am a dialog!
            </div>
        )
    }
}

export default Root;