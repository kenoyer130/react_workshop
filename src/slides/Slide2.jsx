import React from 'react';
import withSlide from '../Slide';

class HelloBody extends React.Component {
    render() {
        return (
            <div>slide 2</div>
        )
    }
}

const  HelloSlide = withSlide(HelloBody);

export default HelloSlide;
