import React from 'react';

class SliderHeader extends React.Component {


    render() {
        return (
            <div>
               Slide {this.props.currentIndex + 1} of {this.props.total}
           </div>
        )
    }
}

SliderHeader.propTypes = {
    currentIndex: React.PropTypes.number,
    total: React.PropTypes.number,
};

export default SliderHeader;