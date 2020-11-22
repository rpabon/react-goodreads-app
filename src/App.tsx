import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSearchResults } from './hooks/useSearchResults';
import { Home } from './components/Home';
import { Book } from './components/Book';
import { Author } from './components/Author';
import { NavBar } from './components/NavBar';
import './App.css';

function App() {
  const { getSearchResults, ...restSearchResultsAPI } = useSearchResults();

  return (
    <Layout>
      <BrowserRouter>
        <NavBar onTermChange={getSearchResults} />

        <Layout.Content>
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
        </Layout.Content>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
