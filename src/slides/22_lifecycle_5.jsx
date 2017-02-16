import Slide from '../Slide';

const Wrapper =  Slide (`
# The Component Lifecycle
* componentWillReceiveProps(nextProps)
    * Called every time the props change
    * Allows things like changing internal state based on prop update
    * Not called during mounting
    * React might call this even though props have not changed so always compare
`);     

export default Wrapper;