import Slide from '../Slide';

const Body  =  Slide (`
# Higher-Order Components
* a function that takes a component and returns a new component
* Pattern to share code between components
* "Prefer composition over inheritance"
* "At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies."

*Actual HOC used to create this slide app!*

\`\`\`

// HOC component that wraps each slide
const Slide = (markup) => {

return class extends React.Component {

  render() {
    return (
        <div>
          <ReactMarkdown source={markup} />
        </div>
      )
    }
  }
}

// sample slide
const Body  =  Slide (' Hello from the other side!')
export default Slide;
\`\`\`
`, 'nerd');     

export default Body;