import React, { Component } from 'react';
import './App.css';
import SlideRoot from './SlideRoot'

let store = {
  slides: [
    { title: 'slide 1' },
    { title: 'slide 2' },
    { title: 'slide 3' },
  ],
  currentIndex: 0
}

class App extends Component {

  render() {
    return (
      <SlideRoot currentIndex={store.currentIndex} total={store.slides.length} title={store.slides[store.currentIndex].title} />
    );
  }
}

export default App;
