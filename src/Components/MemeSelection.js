import React,{Component} from 'react';
import {connect} from 'react-redux';
import MemeSelectionItem from './MemeSelectionItem';

class MemeSelection extends Component{

  render(){
    let {memes} = this.props;
    return (
      memes.map(meme=>{
        return (
          <MemeSelectionItem key={meme.id}
            name={meme.name}
            url={meme.url}
          />
        )
      })
    )
  }
}

const mapStateToProps = state =>{
  return {
    memes:state.memes
  }
}

export default connect(mapStateToProps,null)(MemeSelection);
