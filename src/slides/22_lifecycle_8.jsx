import Slide from '../Slide';

const Wrapper =  Slide (`
# The Component Lifecycle
* componentDidUpdate()
    * Called after component state or props updated
    * Not called on initial render
    * Good place for network calls or actions based on prop or state changes
`);     
  

export default Wrapper;