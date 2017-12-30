import React,{Component} from 'react';

class MemeSelectionItem extends Component{
  render(){
    const {url,name} = this.props;
    return(
      <div className="meme-thumbnail">
        <img src={url} alt={this.name}/>
      </div>
    )
  }
}

export default MemeSelectionItem
