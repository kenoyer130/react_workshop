import React from 'react'
import Slide from '../Slide';

const Wrapper =  Slide (`
# Let keyword
* **let** indicates the variable can be re-assigned later
* Scope works like you think it would

*ES 6*
\`\`\`
foo() {
    for(let i = 0;i < 10;i++) {
        let y = 5 + i;
    }

    console.log(y); <-- y is not defined error
}
\`\`\`

`, 'tangent.png');   

class ConstSlide extends React.Component {
   
    render() {
        return (
            <div>
                <Wrapper />
            </div>
        )
    }
}  

export default ConstSlide;