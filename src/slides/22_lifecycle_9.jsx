import Slide from '../Slide';

const Wrapper =  Slide (`
# The Component Lifecycle
* componentWillUnmount()
    * Called when removed from the DOM and deleted
    * Place where you want to remove window event listeners and timers
    * The deconstructor
`);     
  

export default Wrapper;