import React,{Component} from 'react';

class MemeSelectionItem extends Component{
  render(){
    const {url,name} = this.props.meme;
    return(
      <div className="meme-item" >
        <img src={url} alt={name}
          className="meme-img"/>
          <p className="meme-text">{name}</p>
      </div>
    )
  }
}

export default MemeSelectionItem
