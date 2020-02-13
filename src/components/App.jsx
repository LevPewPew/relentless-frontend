import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { DeckList, CardSubmitBtn } from './components';
import './App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCardsData() {
      let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cards`);
      
      return res;
    }

    async function setInitialData() {
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
      <CardSubmitBtn />
    </div>
  );
}

export default App;
