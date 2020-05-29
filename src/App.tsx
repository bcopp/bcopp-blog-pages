import React, { Component } from 'react';
import TopNavBar from "./components/TopNavBar"
import Blog from "./components/Blog"
import Article from "./components/Article"
import Home from "./components/Home"
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <TopNavBar />
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/:slug" component={Article} />
          </Switch>
        </Router>
      </div>
    );
  }
}
//<ProjectSummary entries={projectEntries}/>

{/*<Button type="primary">Button</Button>*/ }
export default App;