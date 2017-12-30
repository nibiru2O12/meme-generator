import {combineReducers} from 'redux';
import {FETCH_MEMEDATA,NEW_MEME} from '../Actions';

function memes(state=[],action){
  switch (action.type) {
  case FETCH_MEMEDATA:
    return action.memes
    break;
  default:
    return state;
  }
}

function myMemes(state=[],action){
  switch (action.type) {
  case NEW_MEME:
    return [...state,action.newMeme]
    break;
  default:
    return state
  }
}

const RootReducers = combineReducers({
  memes,myMemes
});

export default RootReducers;
