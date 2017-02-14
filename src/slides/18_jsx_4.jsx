import Slide from '../Slide';

const slide =  Slide (`
# JSX Javascript
* Can render the results of functions inline with { }
* Can only include ternary operator ( ? : syntax ) inline since it has to be a function

\`\`\`
// embed the result of a call to getBody function
render() {
    return (
        <div>{this.getBody()}</div>
    )
}

// inline simple if/else logic
render() {
    return (
        <div>
        {
            this.props.show ? <div>here!</div> : null
        }
        </div>
    )
}

\`\`\`

`);     

export default slide;