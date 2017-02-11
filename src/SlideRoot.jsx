import React from 'react';

import Slider from './Slider'
import SliderHeader from './SliderHeader'

import HelloSlide from './slides/HelloSlide'
import Slide2 from './slides/Slide2'

class SlideRoot extends React.Component {
  
  render() {
    return (
      <div>
        <SliderHeader {...this.props} />
        <Slider
          currentIndex={this.props.currentIndex} 
          onSlidesLoaded={this.props.onSlidesLoaded}> 
            <HelloSlide {...this.props} />
            <Slide2 {...this.props} />
        </Slider>
     </div>
    );
  }
}

export default SlideRoot;