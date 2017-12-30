import React,{Component} from 'react';
import {connect} from 'react-redux';
import MemeItem from './MemeItem';

class MemeSelection extends Component{

  render(){
    let {memes} = this.props;
    console.log(this.props)
    return (
      memes.map(meme=>{
       return (
          <MemeItem
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
