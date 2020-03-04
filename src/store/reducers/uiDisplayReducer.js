const initialState = {
  isCardsDisplayActive: false,
  isDeckCreatorActive: false,
  isDeckEditorActive: false,
  defaultValues: {}
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
    case 'DECK_CREATOR_ON':
      newState = { ...state, isDeckCreatorActive: true }
      break;
    case 'DECK_EDITOR_OFF':
      newState = { ...state, isDeckEditorActive: false }
      break;
    case 'DECK_EDITOR_ON':
      newState = { ...state, isDeckEditorActive: true, defaultValues: action.defaultValues }
      break;
    default:
      newState = { ...state }
  }

  return newState;
}

export default uiDisplayReducer;
