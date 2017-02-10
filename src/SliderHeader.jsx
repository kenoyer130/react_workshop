import React from 'react';

class SliderHeader extends React.Component {
    render() {
        return (
            <div>{this.props.title} {this.props.currentIndex} of {this.props.total}</div>
        )
    }
}

SliderHeader.propTypes = {
    title: React.PropTypes.string,
    currentIndex: React.PropTypes.number,
    total: React.PropTypes.number,
};

export default SliderHeader;