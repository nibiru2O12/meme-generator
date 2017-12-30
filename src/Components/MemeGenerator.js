import React,{Component} from 'react';
import {Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';

class MemeGenerator extends Component{
  
  constructor(){
    super();
    this.state={
      'top-text':'',
      'bottom-text':''
    }
  }

  handleTextChange(e){
    this.setState({[e.target.name]:e.target.value});
  }

  render(){
    return(
      <Form inline>
        <FormGroup>
          <ControlLabel>Top</ControlLabel>
          <FormControl type='Text'
            name='top-text'
            placeholder='top text'
            onChange={this.handleTextChange.bind(this)}
            value={this.state['top-text']}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Bottom</ControlLabel>
          <FormControl type="text"
            name="bottom-text"
            placeholder="botton text"
            onChange={this.handleTextChange.bind(this)}
            value={this.state['bottom-text']}
          />
        </FormGroup>
      </Form>
    )
  }
}

export default MemeGenerator;
