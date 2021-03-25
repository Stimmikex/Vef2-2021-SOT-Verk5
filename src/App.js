import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import News from './component/news/News.js';
import NewsCategory from './component/newsCategory/NewsCategory.js';
const {
  REACT_APP_API_URL: apiUrl,
} = process.env;

class App extends Component {
  render() {
    return (
          <Router>
            <div>
              <Switch>
                <Route path="/:id">
                  <h1>Rúv Fréttir</h1>
                  <Child></Child>
                  <hr></hr>
                  <p>Fréttir frá <a href="https://www.ruv.is/">RÚV</a></p>
                </Route>
                <Route path="/">
                  <h1>Rúv Fréttir</h1>
                  <News></News>
                  <hr></hr>
                  <p>Fréttir frá <a href="https://www.ruv.is/">RÚV</a></p>
                </Route>
                <Route path="*">
                  <h1>404 Villa, þessi síða er ekki til.</h1>
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
  const url = apiUrl + id;

  return (
    <div>
      <NewsCategory link={url} amount={19} back={''}></NewsCategory>
  
    </div>
  );
}
 
export default App;
