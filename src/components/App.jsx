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
import { refreshCardsData } from '../store/actions/flashCardsActions';
import './App.scss';

function App() {
  const [ isAllDataLoaded, setIsAllDataLoaded ] = useState(false);

  useEffect(() => {
    const getAllData = async () => {
      try {
        await refreshCardsData();
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
