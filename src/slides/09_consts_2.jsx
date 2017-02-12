import React from 'react'
import Slide from '../Slide';

const Wrapper =  Slide (`
# Const keyword
* **const** means once value is assigned cannot be reassigned
* Scope works like you think it would
* Use const whenever possible
* Overall theme of JS/React is to have variables be *read-only* as much as possible

*ES 6*
\`\`\`
foo() {

    const y = 3;

    for(let i = 0;i < 10;i++) {
        y = y + i; <-- throws error
    }
}
\`\`\`

`);   

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