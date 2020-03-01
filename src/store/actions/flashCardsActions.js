import axios from 'axios';
import store from '../store';

const webServer = process.env.REACT_APP_BACKEND_URL;

// private methods
const getCardsData = async () => {
  let res = await axios.get(`${webServer}/cards`);
  
  return res;
}

const getDecksData = async () => {
  let res = await axios.get(`${webServer}/decks`);
  
  return res;
}

// actions
const cycleCard = () => {
  store.dispatch({ type: 'CYCLE_CARD' });
}

const refreshCardsData = async () => {
  let res = await getCardsData();
  store.dispatch({ type: 'SET_CARDS_DATA', newCardsData: res.data });
}

const refreshDecksData = async () => {
  let res = await getDecksData();
  store.dispatch({ type: 'SET_DECKS_DATA', newDecksData: res.data });
}

const setCurrentDeck = (index) => {
  let deck = store.getState().flashCardsReducer.decksData[index];
  store.dispatch({ type: 'SET_CURRENT_DECK', newCurrentDeck: deck })
}

const setCurrentDeckIndex = (index) => {
  store.dispatch({ type: 'SET_CURRENT_DECK_INDEX', newCurrentDeckIndex: index })
}

const setIsCardsDataLoaded = (bool) => {
  store.dispatch({ type: 'SET_IS_CARDS_DATA_LOADED', newIsCardsDataLoaded: bool });
}

const moveCardToPile = async () => {
  
}

export {
  cycleCard,
  // refreshCardsData,
  refreshDecksData,
  setCurrentDeck,
  setCurrentDeckIndex,
  // setIsCardsDataLoaded
}
