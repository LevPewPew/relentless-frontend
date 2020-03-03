import store from '../store';

const toggleCardsDisplay = () => {
  store.dispatch({ type: 'CARDS_DISPLAY_TOGGLE' })
}

const turnOffCardsDisplay = () => {
  store.dispatch({ type: 'CARDS_DISPLAY_OFF' })
}

const turnOnCardsDisplay = () => {
  store.dispatch({ type: 'CARDS_DISPLAY_ON' })
}

const turnOnDeckCreator = () => {
  store.dispatch({ type: 'DECK_CREATOR_ON' })
}

const turnOnDeckEditor = (defaultValues) => {
  store.dispatch({ type: 'DECK_EDITOR_ON', defaultValues })
}

export {
  toggleCardsDisplay,
  turnOffCardsDisplay,
  turnOnCardsDisplay,
  turnOnDeckCreator,
  turnOnDeckEditor
}