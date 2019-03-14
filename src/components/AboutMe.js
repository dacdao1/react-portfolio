import React from 'react';
import MyNavBar from './NavBar';
import StickyFooter from './StickyFooter.js';

export default class AboutMe extends React.Component{
  render(){
    return(
<div>
        <div>
          <MyNavBar />
        </div>

        <div>

          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">About Me</h1>
              <p className="lead text-muted">Hi, my name is Dac Dao and I'm a college student at Georgia State University.
              My major at GSU is Computer Science and I'm currently a junior. I really enjoy programming and creating
            new projects that I could works on. I also enjoy playing tennis and video games. If you like to hire me, you could click <a href='/contactme'> here</a>.</p>
            </div>
          </section>
        </div>
        <div>
        <StickyFooter />
        </div>
</div>
    );
  }
}
