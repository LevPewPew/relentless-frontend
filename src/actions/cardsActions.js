import axios from 'axios';
import store from '../store';

const webServer = process.env.REACT_APP_BACKEND_URL;

// private methods
const getCardsData = async () => {
  let res = await axios.get(`${webServer}/cards`);
  
  return res;
}

// actions
const cycleCard = () => {
    
}

const setInitialData = async () => {
  try {
    let res = await getCardsData();
    store.dispatch({ type: 'SET_CARDS_DATA', newCardsData: res.data });
  } catch (err) {
    console.log(err);
  }
}

export {
  cycleCard,
  setInitialData
}
