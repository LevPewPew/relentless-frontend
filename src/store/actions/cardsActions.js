import axios from 'axios';
import store from '../store';

const webServer = process.env.REACT_APP_BACKEND_URL;

// private methods
const getCardsData = async () => {
  let res = await axios.get(`${webServer}/cards`);
  
  return res;
}

// actions
const cycleCard = async () => {
  store.dispatch({ type: 'CYCLE_CARD' });
}

const setIsCardsDataLoaded = async (bool) => {
  store.dispatch({ type: 'SET_IS_CARDS_DATA_LOADED', newIsCardsDataLoaded: bool });
}

const refreshCardsData = async () => {
  let res = await getCardsData();
  store.dispatch({ type: 'SET_CARDS_DATA', newCardsData: res.data });
}

const moveCardToPile = async () => {
  
}

export {
  cycleCard,
  refreshCardsData,
  setIsCardsDataLoaded
}
