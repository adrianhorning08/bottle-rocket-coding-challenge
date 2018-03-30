import { combineReducers } from 'redux';
import { restaurantsReducer } from './restaurantsReducer';

const RootReducer = combineReducers({
  restaurants: restaurantsReducer
});

export default RootReducer;
