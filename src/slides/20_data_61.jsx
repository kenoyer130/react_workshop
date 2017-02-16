import Slide from '../Slide';

const Wrapper =  Slide (`
# React Component Communication 
* In React Components are only allowed to communicate with each other through setting properties or firing events.
* Components **CAN NOT** call methods on each other
* This constraint enforces a clear seperation between all components and avoids entanglement.
* Certain DOM manipulations are allowed such as focus(). 
    * See https://facebook.github.io/react/docs/refs-and-the-dom.html
`);     

export default Wrapper;