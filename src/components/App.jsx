import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Footer,
  Header,
  DeckExplorerPage,
  HomePage,
  QuizPage,
  SideBar
} from 'components';
import { refreshDecksData } from '../store/actions/flashCardsActions';
import './App.scss';

function App() {
  const [ isAllDataLoaded, setIsAllDataLoaded ] = useState(false);

  useEffect(() => {
    const getAllData = async () => {
      try {
        await refreshDecksData();
        setIsAllDataLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }

    getAllData();
  }, []);

  if (isAllDataLoaded) {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="sidebar-page-grid">
            <SideBar />
            <div className="page-foot-flex">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/quiz">
                  <QuizPage />
                </Route>
                <Route path="/deck_explorer">
                  <DeckExplorerPage />
                </Route>
              </Switch>
              <Footer />
            </div>
          </div>
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
