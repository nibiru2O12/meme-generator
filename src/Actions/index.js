export const FETCH_MEMEDATA = "FETCH_MEMEDATA";

function receivedMemeData(meme){
  const action={
    type:FETCH_MEMEDATA,
    meme
  }
  return action;
}

export function fetch_memeData(){
  const url='https://api.imgflip.com/get_memes';
  console.log(url);
  return function(dispatch){
    return fetch(url,{method:'GET'})
          .then(response => response.json())
          .then(json => dispatch(receivedMemeData(json.data.memes)))
          .then(()=>console.log('done fetching'));
  }

}
