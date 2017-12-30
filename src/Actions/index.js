import {username,password} from '../Credentials';
export const FETCH_MEMEDATA = "FETCH_MEMEDATA";
export const NEW_MEME="NEW_MEME";

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

function captionedMeme(newMeme){
  console.log('captioned',newMeme)
  const action={
    type:NEW_MEME,
    newMeme
  }
  return action
}

export function captionMeme(meme){
  meme['username']=username;
  meme['password']=password;

  const bodyParams = Object.keys(meme).map(key=>{
    return encodeURIComponent(key) + '=' + encodeURIComponent(meme[key]);
  }).join('&');
  console.log(meme,bodyParams);

  const url='https://api.imgflip.com/caption_image';
  return function(dispatch){
    return fetch(url,{
      method:"POST",
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body:bodyParams
    })
    .then(response => response.json())
    .then(json => dispatch(captionedMeme(json.data)) )
  }
}
