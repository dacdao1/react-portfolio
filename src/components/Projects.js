import React from 'react';
import MyNavBar from './NavBar';
import './Projects.css';
import StickyFooter from './StickyFooter.js';

export default class Projects extends React.Component{
  render(){
      return(
<div>


          <div>
            <MyNavBar />
          </div>


          <div>
            <section className="jumbotron text-center">
              <div className="container">
                <h1 className="jumbotron-heading">My Projects</h1>
                <p className="lead text-muted">These are the projects that I have being working on. Feel free to take whatever you like to use or modify for your own project. You can also access my Github page to get all of the original codes if you click the button bellow.</p>
                <p>
                  <a href="https://github.com/dacdao1" className="btn btn-primary">Github Account</a>

                </p>
              </div>
            </section>
            <div className="album text-muted">
              <div className="container">

                <div className="row">

                  <div className="card">

                    <a href="/donttouchme"><img src="canttouchthis.jpg" alt="My first project" className="img-thumbnail" /> </a>
                    <p className="card-text"><a href="/donttouchme"><h3>Dont Touch Me App</h3></a>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>

                </div>

              </div>
            </div>

            <footer className="text-muted">
              <div className="container">
                <p className="float-right">
                  <a href="/projects">Back to top</a>
                </p>
              </div>
            </footer>

          </div>
          <div>
          <StickyFooter />
          </div>


</div>

      );
    }
  }
