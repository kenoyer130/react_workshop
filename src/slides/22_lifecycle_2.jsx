import Slide from '../Slide';

const Wrapper =  Slide (`
# The Component Lifecycle
* constructor
    * always pass props to the super
    * proper place to initialize state

\`\`\`
constructor(props) {
  super(props);
  this.state = {
    color: props.initialColor
  };
} 
\`\`\`
`);     
  

export default Wrapper;