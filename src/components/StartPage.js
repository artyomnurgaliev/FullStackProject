import React from 'react';
import Home from './Home';
import Projects from './Projects';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function StartPage() {
    return (
        <div>
            <div> 
                <a href = "/home">home </a>
            </div>
            <div>
                <a href = "/projects">projects</a>
            </div>
            <Router> 
                <Switch>
                    <Route exact path = '/home' component = {Home} />
                    <Route exact path = '/projects' component = {Projects} />
                </Switch>
            </Router>
        </div>
    );
  }

export default StartPage;
