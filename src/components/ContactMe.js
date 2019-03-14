import React from 'react';
import MyNavBar from './NavBar';
import StickyFooter from './StickyFooter.js';
import Mailto from 'react-mailto';
export default class ContactMe extends React.Component{
  render(){
    return(
      <div>
        <div>
        <header><MyNavBar /></header>
        </div>
        <div>
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Please email me at <Mailto email="dacdao1@yahoo.com">dacdao1@yahoo.com
      </Mailto></h1>
            </div>
          </section>
        </div>


      <div>
      <StickyFooter />
      </div>
    </div>
    )
  }
}
