import Slide from '../Slide';

const Wrapper =  Slide (`
# The Component Lifecycle
* componentWillMount()
    * called before render so updating state will not trigger rerender
    * in most cases use constructor instead
`);     
  

export default Wrapper;