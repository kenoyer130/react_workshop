import Slide from '../Slide';
import Nerd from './images/nerd.png'
import Rant from './images/rant.jpg'
import React from 'react';

const Wrapper =  Slide (`
# A Note on symbols
`);     

class Root extends React.Component {

    render() {

        const style = {
            verticalAlign: 'middle'

        }

        return (
            <div>
                <Wrapper />
                <div style={style}>
                    <img src={Nerd} alt='nerd'  height={64} width={64} /> Nerd = A complex topic not needed to understand basic React
                </div>
                <div style={style}>
                    <img src={Rant} alt='rant'  height={64} width={64} /> Rant = Grumpy Old Man Kenoyer rant
that may or may not have anything to do with React, Programming, or Common Sense.

                </div>
            </div>
        )
    }
} 


export default Root;