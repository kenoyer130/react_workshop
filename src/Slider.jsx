import React from 'react';
import SliderHeader from "./SliderHeader"

class Slider extends React.Component {

  render() {
    return (
        <div>
            <SliderHeader title={this.props.title} current={this.props.current} total={this.props.total}/>
            <div>               
                {this.props.children[this.props.current]}
            </div>
        </div>
    );
  }
}


export default Slider;