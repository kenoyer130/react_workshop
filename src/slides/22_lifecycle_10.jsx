import Slide from '../Slide';

const Wrapper =  Slide (`
# The Component Lifecycle
* componentWillUnmount()
    * Called when Component removed from the DOM and destroyed
    * the 'deconstructor'
    * place to remove window event listeners or timers
`);     
  

export default Wrapper;