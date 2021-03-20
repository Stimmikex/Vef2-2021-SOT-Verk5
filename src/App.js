import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { News, NewsCategory }from './test';

class App extends Component {
  render() {
    return (
        // <div className="App">
        //   <News></News>
        // </div>
          <Router>
            <div>
      
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/:id">
                  <Child></Child>
                </Route>
                <Route path="/">
                  <News></News>
                </Route>
              </Switch>
            </div>
          </Router>
    );
  }
}
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const url = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/'+ id;

  return (
    <div>
      <NewsCategory link={url}></NewsCategory>
    </div>
  );
}
 
export default App;
