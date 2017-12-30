import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMeme from './MyMeme';

import {captionMeme} from '../Actions';

class MemeGenerator extends Component{
  constructor(){
    super();
    this.state={
      text0:'',
      text1:'',
      memeLimit:2
    }
  }

  handleLoadMore(){
    const currentLimit = parseInt(this.state.memeLimit);
    this.setState({
      memeLimit : currentLimit + 2
    });
  }

  handleCaptionMeme(meme){
    const {text0,text1} = this.state;
    const newMeme = {
      text0,text1,
      template_id:meme.id
    }
    this.props.captionMeme(newMeme);
  }

  handleTextChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  render(){

    const {memes,myMemes} = this.props;
    const {memeLimit  } = this.state;
    const limitedMemes = memes.slice(0,memeLimit);
    let LoadMore = (
      <div className="meme-button"
        onClick={this.handleLoadMore.bind(this)}>
        load more...
      </div>
    );
    if(memes.length <= memeLimit){
      LoadMore=null
    }

    return(
      <div>
        {
          myMemes.map(meme=>{
            return (
              <MyMeme meme={meme} />
            )
          })
        }
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>{' '}
            <FormControl type='Text'
              name='text0'
              placeholder='top text'
              onChange={this.handleTextChange.bind(this)}
              value={this.state['top-text']}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Bottom </ControlLabel>{' '}
            <FormControl type="text"
              name="text1"
              placeholder="botton text"
              onChange={this.handleTextChange.bind(this)}
              value={this.state['bottom-text']}
            />
          </FormGroup>
        </Form>
        {
          limitedMemes.map(meme =>{
            return (
              <MemeItem key={meme.id} meme={meme} onMemeClick={this.handleCaptionMeme.bind(this)} />
            )
          })
        }
        {LoadMore}
      </div>
    )
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps,{captionMeme})(MemeGenerator);
