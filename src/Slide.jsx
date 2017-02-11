import React from 'react';

const Slide = (SlideBody) => {

return class extends React.Component {

  render() {
    return (
      <div>
        <SlideBody />
      </div>
      )
    }
  }
}

export default Slide;