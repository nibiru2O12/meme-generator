import {combineReducers} from 'redux';
import {FETCH_MEMEDATA} from '../Actions';

function memes(state=[],action){
  switch (action.type) {
  case FETCH_MEMEDATA:
    return action.memes
    break;
  default:
    return state;
  }
}

const RootReducers = combineReducers({
  memes
});

export default RootReducers;
