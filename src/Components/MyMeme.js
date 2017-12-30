import React,{Component} from 'react';

class MyMeme extends Component{

  render(){
    const meme=this.props.meme;
    const {id,url,path} = this.props.meme;

    return(
        <img src={url} alt={path}
          className='meme-mine'/>
    )
  }
}

export default MyMeme;
