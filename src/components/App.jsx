import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Footer,
  Header,
  EditorPage,
  HomePage,
  QuizPage,
  SideBar
} from './components';
import { setInitialData } from '../actions/cardsActions';
import './App.scss';

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setInitialData();
  }, []);

  if (isLoaded) {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <SideBar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/quiz">
                <QuizPage />
              </Route>
              <Route path="/editor">
                <EditorPage />
              </Route>
            </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <>
        <div>LOADING</div>
        <div>LOADING</div>
        <div>LOADING</div>
        <div>LOADING</div>
        <div>LOADING</div>
      </>
    );
  }
}

export default App;
