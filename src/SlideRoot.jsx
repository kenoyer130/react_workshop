import React from 'react';

import Slider from './Slider'
import SliderHeader from './SliderHeader'

import Welcome from './slides/00_Welcome'
import Welcome1 from './slides/01_Welcome_1'
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
import JSX5 from './slides/18_jsx_5'
import Attach from './slides/19_attach'
import Attach1 from './slides/19_attach_1'
import Data1 from './slides/20_data_1'
import Data2 from './slides/20_data_2'
import Data3 from './slides/20_data_3'
import Data4 from './slides/20_data_4'
import Data5 from './slides/20_data_5'
import Data6 from './slides/20_data_6'
import Data61 from './slides/20_data_61'
import Data7 from './slides/20_data_7'
import Data71 from './slides/20_data_71'
import Data72 from './slides/20_data_72'
import Data8 from './slides/20_data_8'
import State from './slides/21_store_1'
import State2 from './slides/21_store_2'
import State3 from './slides/21_store_3'
import State4 from './slides/21_store_4'
import State6 from './slides/21_store_6'
import State7 from './slides/21_store_7'
import State8 from './slides/21_store_8'
import State9 from './slides/21_store_9'
import State10 from './slides/21_store_10'
import Life1 from './slides/22_lifecycle_1'
import Life2 from './slides/22_lifecycle_2'
import Life3 from './slides/22_lifecycle_3'
import Life4 from './slides/22_lifecycle_4'
import Life5 from './slides/22_lifecycle_5'
import Life6 from './slides/22_lifecycle_6'
import Life7 from './slides/22_lifecycle_7'
import Life8 from './slides/22_lifecycle_8'
import Life9 from './slides/22_lifecycle_9'
import Shadow1 from './slides/23_shadow_1'
import Shadow2 from './slides/23_shadow_2'
import HOC from './slides/24_HOC_1'
import Trick1 from'./slides/25_trick_1'
import Trick2 from'./slides/25_trick_2'
import Mock from './slides/26_workshop_1'
import Done from'./slides/25_trick_3'
import Dev from './slides/21_store_7_1'

class SlideRoot extends React.Component {
  
  render() {
    return (
      <div>
        <SliderHeader {...this.props} />
        <Slider
          currentIndex={this.props.currentIndex} 
          onSlidesLoaded={this.props.onSlidesLoaded}> 
            <Welcome />
            <Welcome1 />
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
             <JSX5 /> 
            <Attach />
            <Attach1 />
            <Data1 />
            <Data2 />
            <Data3 />
            <Data4 />
            <Data5 />
            <Data6 />
            <Data61 />
            <Data7 />
            <Data71 />
            <Data72 />
            <Data8 />
            <State />
            <State2 />
            <State3 />
            <State4 />
            <State6 />
            <State7 />
            <State9 />
            <State10 />
            <Dev />
            <State8 />
            <Life1 />
            <Life2 />
            <Life3 />
            <Life4 />
            <Life5 />
            <Life6 />
            <Life7 />
            <Life8 />
            <Life9 />
            <Shadow1 />
            <Shadow2 />
            <HOC />
            <Trick1 />
            <Trick2 />
            <Done />
            <Mock />
        </Slider>
     </div>
    );
  }
}

export default SlideRoot;