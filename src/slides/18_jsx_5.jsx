import Slide from '../Slide';
import React from 'react';

const Wrapper =  Slide (`
# Styling your component
* Can use inline styles or external css
* Can use javascript to inject logic

\`\`\`
class Hello extends React.Component {

    render() {

        const style = {
            color: '#424242',
            fontFamily: 'Georgia, Garamond, Times, serif',
            letterSpacing: '0.1em',
            textAlign:'center',
            margin: '40px auto',
            lineHeight: '145%',
            fontSize: '14pt',
            fontVariant: 'small-caps',
            display: this.props.visible ? 'block' : 'none'
        }

        return (
               <div style={style}>I'm so pretty OH so pretty</div>
        )
    }
} 

\`\`\`

`);     

class Me extends React.Component {

    render() {
        return (
            <div>
                <Wrapper />
                <Root />
            </div>
        )
    }
} 

class Root extends React.Component {

    constructor() {
        super();
        this.state = {visible:true};
    }

    clickme = () => {
        this.setState({...this.state, visible: !this.state.visible});
    }

    render() {
        return (
            <div>
                <input type='button' value='Click Me' onClick={this.clickme} />
                <p/>
                <Hello visible={this.state.visible} />
            </div>
        )
    }
}  

class Hello extends React.Component {

    render() {

        const style = {
            color: '#424242',
            fontfamily: 'Georgia, Garamond, Times, serif',
            letterspacing: '0.1em',
            textalign:'center',
            margin: '40px auto',
            texttransform: 'lowercase',
            lineheight: '145%',
            fontsize: '14pt',
            fontvariant: 'small-caps',
            display: this.props.visible ? 'block' : 'none'
        }

        return (
            <div className='react'>
               <div style={style}>I'm so pretty OH so pretty</div>
            </div>
        )
    }
} 

export default Me;