import React from 'react';

import Slider from './Slider'
import SliderHeader from './SliderHeader'

import Welcome from './slides/00_Welcome'
import WhatReact from './slides/01_WhatReact'
import WhyReact from './slides/02_WhyReact'
import WhatReactNot from './slides/03_WhatReactNot'
import Unix from './slides/03_WhatReactNot_1_Unix'
import Who from './slides/04_WhoUsesReact'
import Not from './slides/05_WhoNotUseReact'
import Why from './slides/06_WhyReactInvented'
import UseJS from './slides/07_UseJavascript'
import UseJsFrame from './slides/07_UseJavascript_1'
import UseJsApi from './slides/07_UseJavascript_2'
import ModernJS from './slides/08_ModernJS'
import Consts from './slides/09_consts'
import Consts1 from './slides/09_consts_01'
import Consts2 from './slides/09_consts_2'
import Arrows from './slides/10_arrows'
import Modules from './slides/11_modules'
import Classes from './slides/12_classes'
import Stack from './slides/12_stack_1'
import Bad from './slides/13_badexample'
import Intro from './slides/14_intro'
import Nested from './slides/15_intro'
import Tree from './slides/16_intro'
import Render from './slides/17_intro'
import JSX from './slides/18_jsx'
import JSX1 from './slides/18_jsx_1'
import JSX2 from './slides/18_jsx_2'
import JSX3 from './slides/18_jsx_3'
import JSX4 from './slides/18_jsx_4'
import Attach from './slides/19_attach'
import Attach1 from './slides/19_attach_1'
import Data1 from './slides/20_data_1'
import Data2 from './slides/20_data_2'
import Data3 from './slides/20_data_3'
import Data4 from './slides/20_data_4'
import Data5 from './slides/20_data_5'
import Data6 from './slides/20_data_6'
import Data7 from './slides/20_data_7'
import Data8 from './slides/20_data_8'
import State from './slides/21_store_1'
import State2 from './slides/21_store_2'

class SlideRoot extends React.Component {
  
  render() {
    return (
      <div>
        <SliderHeader {...this.props} />
        <Slider
          currentIndex={this.props.currentIndex} 
          onSlidesLoaded={this.props.onSlidesLoaded}> 
            <Welcome />
            <WhatReact />
            <WhyReact />
            <WhatReactNot />
            <Unix />
            <Who />
            <Not />
            <Why />
            <UseJS />
            <UseJsFrame />
            <UseJsApi />
            <ModernJS />
            <Consts />
            <Consts1 />
            <Consts2 />
            <Arrows />
            <Modules />
            <Classes />
            <Stack />
            <Bad />
            <Intro />
            <Nested />
            <Tree />
            <Render />
            <JSX />
            <JSX4 />
            <JSX1 />
            <JSX2 />
            <JSX3 /> 
            <Attach />
            <Attach1 />
            <Data1 />
            <Data2 />
            <Data3 />
            <Data4 />
            <Data5 />
            <Data6 />
            <Data7 />
            <Data8 />
            <State />
            <State2 />
        </Slider>
     </div>
    );
  }
}

export default SlideRoot;