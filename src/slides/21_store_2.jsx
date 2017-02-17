import Slide from '../Slide';

const Root =  Slide (`
# The Component State
* The State is immutable, you cannot modify the existing state, you must create a new copy of the state
* This is for performance reasons. The component can quickly determine what part of the state changed
* Immutability is a large concept we will dig into in a different workshop
* **Gotcha** Updating the State is an async operation
* **Gotcha** Call setState to update the state, NOT this.state = { .. }
* Spread operator (ES 6) can create a copy of a complicated state with just the updates you care about

\`\`\`
class Root extends React.Component {

    constructor(props) {
        super(props);

        this.state = { <-- initialize state
            label: '',
            value: 3
        }
    }

    onclick = () => {
        this.setState({...this.state, value: 4}); <-- ... spread operator

        // this.state = { value: 4, label: '' } <-- won't work since you are not calling setState

        // this.state = setState({ value: 4}) <-- careful you just created a new state with only the value property!

        // this.setState({...this.state, label: 'test'}); <-- won't work due to setStore being async
        // this.setState({...this.state, value: 4}); <-- this line will reset the label back

        // this.setState({...this.state, label: 'test', value: 4}); <-- this is how you update multiple properties
    }
}
\`\`\`

`);     

export default Root;