import { combineReducers } from 'redux';
import flashCardsReducer from './flashCardsReducer';
import uiDisplayReducer from './uiDisplayReducer';

export default combineReducers({
  flashCardsReducer,
  uiDisplayReducer
});
