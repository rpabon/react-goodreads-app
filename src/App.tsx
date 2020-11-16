import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSearchResults } from './hooks/useSearchResults';
import { Home } from './components/Home';
import { Book } from './components/Book';
import { Author } from './components/Author';
import { Header } from './components/Header';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  const { getSearchResults, ...restSearchResultsAPI } = useSearchResults();

  return (
    <Router>
      <Header onTermChange={getSearchResults} />

      <div className="container py-5">
        <Switch>
          <Route exact path="/">
            <Home {...restSearchResultsAPI} />
          </Route>
          <Route path="/book/:id">
            <Book />
          </Route>
          <Route path="/author/:id">
            <Author />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
