const initialState = {
  isCardsDataLoaded: false,
  cardsData: [],
  deckPosition: 0
};

function cardsReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case 'SET_IS_CARDS_DATA_LOADED':
      newState = { ...state, isCardsDataLoaded: action.newIsCardsDataLoaded };
      break;
    case 'SET_CARDS_DATA':
      newState = { ...state, cardsData: action.newCardsData };
      break;
    case 'APPEND_CARDS_DATA':
      let newCardsData = [...state.cardsData, ...action.newCards];
      newState = { ...state, cardsData: newCardsData };
      break;
    case 'CYCLE_CARD':
      newState = { ...state, deckPosition: state.deckPosition + 1 };
      break;
    default:
      newState = { ...state };
  }
  
  return newState;
}

export default cardsReducer;
