import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';
import DontTouchMe from './components/Projects/DontTouchMe';

ReactDOM.render(
<BrowserRouter>
  <div>
  <Route exact path="/" component={App} />
  <Route path="/aboutme" component={AboutMe} />
  <Route path="/projects" component={Projects} />
  <Route path="/resume" component={Resume} />
  <Route path="/contactme" component={ContactMe} />
  <Route path="/donttouchme" component={DontTouchMe} />
  </div>
</BrowserRouter>, document.getElementById('root'));
