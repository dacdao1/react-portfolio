import React from 'react';
import MyNavBar from './NavBar';
import myResume from './myResume.jpg';
import StickyFooter from './StickyFooter.js';

export default class Resume extends React.Component{
  render(){
      return(
        <div>
  <div>
            <MyNavBar />
  </div>

  <div>
<img src={myResume}/>
  </div>
  <div>
  <StickyFooter />
  </div>
    </div>
      );
    }
  }
