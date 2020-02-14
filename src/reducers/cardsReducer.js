const initialState = {
  cardsData: []
};

function cardsReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case 'SET_CARDS_DATA':
      newState = { ...state, cardsData: action.newCardsData };
      break;
    case 'APPEND_CARDS_DATA':
      let newCardsData = [ ...state.cardsData, ...action.newCards ];
      newState = { ...state, cardsData: newCardsData };
      break;
    default:
      newState = { ...state };
  }
  
  return newState;
}

export default cardsReducer;
