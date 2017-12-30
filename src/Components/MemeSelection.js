import React,{Component} from 'react';
import {connect} from 'react-redux';
import MemeSelectionItem from './MemeSelectionItem';

class MemeSelection extends Component{

  render(){
    let {memes} = this.props;
    console.log(this.props)
    return (
      memes.map(meme=>{
       return (
          <MemeSelectionItem
            key={meme.id} meme={meme}
          />
        )
      })
    )
  }
}

const mapStateToProps = state =>{
  return state
}

export default connect(mapStateToProps,null)(MemeSelection);
