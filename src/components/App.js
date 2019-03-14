import React, { Component } from 'react';
import MyNavBar from './NavBar';
import './App.css';
import StickyFooter from './StickyFooter.js';
export default class App extends Component{
  render(){
    return(
      <div>
<div>
          <MyNavBar />
</div>

<div>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img className="first-slide" src='picture1.jpg' alt="First slide" />
        <div className="container">
          <div className="carousel-caption d-none d-md-block text-left">
            <h1>Welcome To My Site</h1>
            <p>Please feel free to use the navigation above to go through my website. You can also add me on LinkedIn. Let stay conneted. </p>
            <a href="https://www.linkedin.com/in/dac-dao-316b23b2/" className="btn btn-lg btn-primary fa fa-linkedin"></a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="second-slide" src="picture2.jpg" alt="Second slide" />
        <div className="container">
          <div className="carousel-caption d-none d-md-block">
            <h1>Welcome To My Site</h1>
              <p>Please feel free to use the navigation above to go through my website. You can also add me on Twitter. Let stay conneted. </p>
              <a href="https://twitter.com/dacdao1" className="btn btn-lg btn-primary fa fa-twitter"></a></div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="third-slide" src="picture3.jpg" alt="Third slide" />
        <div className="container">
          <div className="carousel-caption d-none d-md-block text-right">
            <h1>Welcome To My Site</h1>
              <p>Please feel free to use the navigation above to go through my website. You can also add me on Github. Let stay conneted. </p>
              <a href="https://github.com/dacdao1" className="btn btn-lg btn-primary fa fa-github"></a></div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
<div>
<StickyFooter />
</div>

  </div>
    );
  }
}
