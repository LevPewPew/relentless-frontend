const initialState = {
  isDecksDataLoaded: false,
  decksData: [],
  currentDeck: [],
  currentDeckIndex: 0
};

function flashCardsReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case 'SET_IS_DECKS_DATA_LOADED':
      newState = { ...state, isDecksDataLoaded: action.newIsDecksDataLoaded };
      break;
    case 'SET_DECKS_DATA':
      newState = { ...state, decksData: action.newDecksData };
      break;
    case 'APPEND_DECKS_DATA':
      let newDecksData = [ ...state.decksData, action.newDecks ];
      newState = { ...state, decksData: newDecksData };
      break;
    case 'SET_CURRENT_DECK':
      newState = { ...state, currentDeck: action.newCurrentDeck }
      break;
    case 'SET_CURRENT_DECK_INDEX':
      newState = { ...state, currentDeckIndex: action.newCurrentDeckIndex }
      break;
    case 'CYCLE_CARD':
      newState = { ...state, deckPosition: state.deckPosition + 1 };
      break;
    case 'CYCLE_PILE':
      newState = { ...state }
      break;
    default:
      newState = { ...state };
  }
  
  return newState;
}

export default flashCardsReducer;
