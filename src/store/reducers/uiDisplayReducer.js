const initialState = {
  isCardsDisplayActive: false
}

function uiDisplayReducer(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case 'CARDS_DISPLAY_TOGGLE':
      newState = { ...state, isCardsDisplayActive: state.isCardsDisplayActive ? false : true }
      break;
    case 'CARDS_DISPLAY_OFF':
      newState = { ...state, isCardsDisplayActive: false }
      break;
    case 'CARDS_DISPLAY_ON':
      newState = { ...state, isCardsDisplayActive: true }
      break;
    default:
      newState = { ...state }
  }

  return newState;
}

export default uiDisplayReducer;
