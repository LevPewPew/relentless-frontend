import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { CardForm, DeckList } from './components';
import './App.scss';

const webServer = process.env.REACT_APP_BACKEND_URL;

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getCardsData = async () => {
      let res = await axios.get(`${webServer}/cards`);
      
      return res;
    }

    const setInitialData = async () => {
      try {
        let res = await getCardsData();
        dispatch({ type: 'SET_CARDS_DATA', newCardsData: res.data });
      } catch (err) {
        console.log(err);
      }
    }

    setInitialData();
  }, []);

  return (
    <div className="App">
      <h1>Relentless</h1>
      <h2>by Lev</h2>
      <DeckList />
      <CardForm />
    </div>
  );
}

export default App;
