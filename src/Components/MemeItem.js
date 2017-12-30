import React,{Component} from 'react';
import {connect} from 'react-redux';
import {captionMeme} from '../Actions';

class MemeItem extends Component{

  constructor(){
    super();
    this.state={
      hovered:false
    };
  }

  handleOnClick(meme){
    this.props.onMemeClick(meme)
  }

  render(){
    const meme=this.props.meme;
    const {id,url,name,onMemeClick} = this.props.meme;
    const {hovered} = this.state;
    let imgStyle = 'meme-img';
    let txtStyle = 'meme-text';

    if(hovered){
      imgStyle +=' darken-img';
      txtStyle +=' no-txt';
    }
    return(
      <div className="meme-item"
        onMouseOver={()=>this.setState({hovered:true})}
        onMouseLeave={()=>this.setState({hovered:false})}
        onClick={()=>this.handleOnClick(meme)}
        >
        <img src={url} alt={name}
          className={imgStyle}/>
          <p className={txtStyle}>{name}</p>
      </div>
    )
  }
}

export default connect(null,{captionMeme})(MemeItem);
