import React,{Component} from 'react';
import {Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
import MemeSelection from './MemeSelection';

class MemeGenerator extends Component{

  constructor(){
    super();
    this.state={
      text0:'',
      text1:''
    }
  }

  handleTextChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  render(){
    return(
      <div>
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
        <MemeSelection limit='2' />
      </div>
    )
  }
}

export default MemeGenerator;
