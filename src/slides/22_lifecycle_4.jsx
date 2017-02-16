import Slide from '../Slide';

const Wrapper =  Slide (`
# The Component Lifecycle
* componentDidMount()
    * Component has been added to the DOM
    * Good place to trigger data fetches or actions
    * State changes in this method do trigger a re-render
    * Is NOT called again when props or state are changed
    * Good place to add window event listeners or timers
    * Somewhat like the jquery 'onReady'
`);     
  

export default Wrapper;