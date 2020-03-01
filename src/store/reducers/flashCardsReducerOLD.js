const initialState = {
  isCardsDataLoaded: false, // TODO remove this once revamped to use decks
  cardsData: [], // TODO remove this once revamped to use decks
  isDecksDataLoaded: false,
  decksData: [],
  currentDeck: []
};

// TODO implement pile system once random choice is working
// one deck object element in decksData array:
// {
//   fullDeck: [],
//   currentPile: [],
//   pile1: [],
//   pile2: [],
//   pile3: [],
//   pile4: [],
//   pile5: [],
// }

function flashCardsReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    //TODO remove these 3 cards data actions once moved over to deck system
    case 'SET_IS_CARDS_DATA_LOADED':
      newState = { ...state, isCardsDataLoaded: action.newIsCardsDataLoaded };
      break;
    case 'SET_CARDS_DATA':
      newState = { ...state, cardsData: action.newCardsData };
      break;
    case 'APPEND_CARDS_DATA':
      let newCardsData = [ ...state.cardsData, action.newCard ];
      newState = { ...state, cardsData: newCardsData };
      break;
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
    case 'CYCLE_CARD':
      newState = { ...state, deckPosition: state.deckPosition + 1 };
      break;
    // TODO implement pile system once random choice is working
    case 'CYCLE_PILE':
      newState = { ...state }
      break;
    default:
      newState = { ...state };
  }
  
  return newState;
}

export default flashCardsReducer;
