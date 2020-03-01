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

export {
  toggleCardsDisplay,
  turnOffCardsDisplay,
  turnOnCardsDisplay
}