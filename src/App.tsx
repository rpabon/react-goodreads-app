import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSearchResults } from './components/SearchResultsList/useSearchResults';
import { Home } from './components/Home/Home';
import { Book } from './components/Book/Book';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  const searchResultsAPI = useSearchResults();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home {...searchResultsAPI} />
        </Route>
        <Route path="/book/:id">
          <Book getSearchResults={searchResultsAPI.getSearchResults} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
