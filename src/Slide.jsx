import React from 'react';
import ReactMarkdown from 'react-markdown';

const Slide = (markup) => {

return class extends React.Component {

  render() {
    return (
        <div>
          <ReactMarkdown source={markup} />
        </div>
      )
    }
  }
}

export default Slide;