import Slide from '../Slide';

const Wrapper =  Slide (`
# React Component Communication 
* In React Components are only allowed to communicate with each other through setting properties or firing events.
* Components **CAN NOT** call methods on each other
* This constraint enforces a clear seperation between all components and avoids entanglement.
`);     

export default Wrapper;