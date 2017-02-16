import React from 'react';
import ReactMarkdown from 'react-markdown';
import Nerd from './slides/images/nerd.png'
import Rant from './slides/images/rant.jpg'

const Slide = (markup, image) => {

return class extends React.Component {

  getImg() {
    if(image === null) {
      return null;
    } else if(image ==='nerd') {
      return <img src={Nerd} alt='nerd'  height={64} width={64} />
    } else if(image === 'rage') {
      return <img src={Rant} alt='rant'  height={64} width={64} />
    }
  }

  render() {
    return (
        <div>
          {this.getImg()}
          <ReactMarkdown source={markup}/>
        </div>
      )
    }
  }
}

export default Slide;