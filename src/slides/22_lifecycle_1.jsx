import Slide from '../Slide';

const Wrapper =  Slide (`
# The Component Lifecycle
## Don't panic. Most of the time you will only deal with *render*, *componentDidMount*, and componentWillUnmount
* Mounting
    * constructor
    * componentWillMount
    * render
    * componentDidMount
* Updating
    * componentWillReceiveProps
    * shouldComponentUpdate
    * componentWillUpdate
    * componentDidUpdate
* Unmounting
    * componentWillUnmount
`);     
  

export default Wrapper;