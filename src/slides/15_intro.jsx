import Slide from '../Slide';
import React from 'react'

const Wrapper =  Slide (`
# REACT Components

* React components can render an HTML like mixture of other React Components and HTML
    * React Components must start with a Capital letter
    * HTML elements begin with lowercase
    * Allows rendering optimizations

\`\`\`
class Root extends React.Component {

    render() {
        return (
            <div>
               <Hello />
               <div>Sneaking in here</div>
               <Goodbye />
            </div>
        )
    }
} 


class Hello extends React.Component {

    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
} 

class Goodbye extends React.Component {
    render() {
        return (
            <div>
                Goodby Cruel World!
            </div>
        )
    }
}
\`\`\`

`);     

class Main extends React.Component {

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

    render() {
        return (
            <div>
               <Hello />
               <div>Sneaking in here</div>
               <Goodbye />
            </div>
        )
    }
} 


class Hello extends React.Component {

    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
} 

class Goodbye extends React.Component {
    render() {
        return (
            <div>
                Goodby Cruel World!
            </div>
        )
    }
}

export default Main;
