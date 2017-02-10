import React from 'react';

import Slider from './Slider'
import Slide from './Slide'

import HelloSlide from './slides/HelloSlide'

class SlideRoot extends React.Component {
  render() {
    return (
     <Slider title={this.props.title} currentIndex={this.props.currentIndex} total={this.props.total} >
       <Slide>
        <HelloSlide />
       </Slide>
     </Slider>
    );
  }
}

export default SlideRoot;