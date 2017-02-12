import React from 'react'
import Slide from '../Slide';

const Wrapper =  Slide (`
# Const and Let keywords

* Replaces var (do not use ever var EVER)

*ES 5*
\`\`\`
function foo() {
    for(var i = 0;i < 10;i++) {
        var y = 5;
    }

    console.log(y);
}
\`\`\`

`, 'tangent.png');   

class ConstSlide extends React.Component {
    
    output = () => {
        for(var i = 0;i < 10;i++) {
        var y = 5;
        }

        console.log('the value of y is ' + y);
    }

    render() {
        return (
            <div>
                <Wrapper />
                {this.output()}
            </div>
        )
    }
}  

export default ConstSlide;