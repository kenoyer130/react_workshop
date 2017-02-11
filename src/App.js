import React, { Component } from 'react';
import './App.css';
import SlideRoot from './SlideRoot'

class App extends Component {

  constructor() {
    super();

    this.state = {
       currentIndex: 0,
       total: 0
    };
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      if(e.code === 'ArrowLeft') {
        this.goBack();
     } else if(e.code === 'ArrowRight') {
       this.goNext();
     }
    };
  }

  goBack = () => {
      if(this.state.currentIndex - 1 < 0) {
        return;
      }

      const i = this.state.currentIndex - 1;
      this.setState({...this.state, currentIndex: i});
  }

  goNext = () => {
      if(this.state.currentIndex + 1 > this.state.total -1) {
        return;
      }

      const i = this.state.currentIndex + 1;
      this.setState({...this.state, currentIndex: i});
  }

  onSlidesLoaded = (totalSlides) => {
    this.setState({...this.state, total: totalSlides});
  }

  render() {
    return (
      <SlideRoot 
        currentIndex={this.state.currentIndex} 
        total={this.state.total}
        onSlidesLoaded={this.onSlidesLoaded}
      />
    );
  }
}

export default App;
