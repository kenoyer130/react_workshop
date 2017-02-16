import Slide from '../Slide';

const Wrapper =  Slide (`
# The Component Lifecycle
* shouldComponentUpdate(nextProps, nextState)
    * return True or False to rerender based on prop or state change
    * in most cases just ignore this and let React do its thing
`);     
  

export default Wrapper;