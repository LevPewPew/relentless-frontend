import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  Footer,
  Header,
  HomePage,
  QuizPage,
  SideBar
} from './components';
import { setInitialData } from '../actions/cardsActions';
import './App.scss';

const webServer = process.env.REACT_APP_BACKEND_URL;

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // const getCardsData = async () => {
    //   let res = await axios.get(`${webServer}/cards`);
      
    //   return res;
    // }

    // const setInitialData = async () => {
    //   try {
    //     let res = await getCardsData();
    //     dispatch({ type: 'SET_CARDS_DATA', newCardsData: res.data });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    setInitialData();
  }, []);

  return (
    <div className="App">
      <Header />
      <SideBar />
      <QuizPage />
      <Footer />
    </div>
  );
}

export default App;
