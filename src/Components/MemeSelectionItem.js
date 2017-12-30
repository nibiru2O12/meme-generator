import React,{Component} from 'react';

class MemeSelectionItem extends Component{

  constructor(){
    super();
    this.state={
      hovered:false
    };
  }

  render(){
    const {url,name} = this.props.meme;
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
        onMouseLeave={()=>this.setState({hovered:false})}>
        <img src={url} alt={name}
          className={imgStyle}/>
          <p className={txtStyle}>{name}</p>
      </div>
    )
  }
}

export default MemeSelectionItem
