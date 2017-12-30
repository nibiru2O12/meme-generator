import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap'
import MemeItem from './MemeItem';

class MemeSelection extends Component{

  constructor(props){
    super(props);
    this.state={
      limit:props.limit
    }
  }

  handleLoadMore(){
    const loadedImage = parseInt(this.state.limit);
    const propsLimit = parseInt(this.props.limit);
    this.setState({
      limit: loadedImage + propsLimit
    });

    console.log('newLimit',this.state.limit);
  }

  render(){
    console.log(this.props);
    let {memes} = this.props;
    let {limit} = this.state;
    let limitedMemes = memes.slice(0,limit);
    let LoadMore = (
      <div
        className='meme-button'
        onClick={this.handleLoadMore.bind(this)}>
        load more...
      </div>
    );

    if(limit >= memes.length){
        LoadMore=null;
    }

    return (
      <div>
        {
          limitedMemes.map(meme=>{
           return (
                <MemeItem key={meme.id} meme={meme}/>
            )
          })
        }
        {LoadMore}

      </div>
    )
  }
}

const mapStateToProps = state =>{
  return state
}

export default connect(mapStateToProps,null)(MemeSelection);
