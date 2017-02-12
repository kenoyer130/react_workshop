import React from 'react';
import ReactMarkdown from 'react-markdown';

const Slide = (markup, img) => {

return class extends React.Component {

  render() {
    return (
        <div>
          <Img img={img} />
          <ReactMarkdown source={markup} />
        </div>
      )
    }
  }
}

class Img extends React.Component {
  render() {

    const style = {
      backgroundImage : 'url(' + this.props.img + ')'
    }

    return (
        this.props.img ? 
          <div style={style}>&nbsp;</div>
           : null
    );
  }
}

export default Slide;