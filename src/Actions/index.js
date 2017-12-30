import {username,password} from '../Credentials';
export const FETCH_MEMEDATA = "FETCH_MEMEDATA";
export const CAPTION_MEME="CAPTION_MEME";

function receivedMemeData(json){
  const {memes}=json.data;
  const action={
    type:FETCH_MEMEDATA,
    memes
  }
  return action;
}

export function fetch_memeData(){
  const url='https://api.imgflip.com/get_memes';
  console.log(url);
  return function(dispatch){
    return fetch(url,{method:'GET'})
          .then(response => response.json())
          .then(json => dispatch(receivedMemeData(json)))
          .then(()=>console.log('done fetching'));
  }

}

function captionedMeme(orig,json){
  const action={
    type:CAPTION_MEME,
    json
  }
  return action
}

export function captionMeme(meme,text0,text1){
  const url='https://api.imgflip.com/caption_image';

  return function(dispatch){
    return fetch(url,{
      method:"POST",
      username:username,
      password:password,
      template_id:meme.id,
      text0:text0,
      text1:text1
    })
    .then(response => response.json())
    .then(json => dispatch(meme,json) )
  }
}
