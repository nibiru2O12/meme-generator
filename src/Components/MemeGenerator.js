import React,{Component} from 'react';
import {Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
class MemeGenerator extends Component{
  render(){
    return(
      <Form inline>
        <FormGroup>
          <ControlLabel>Top</ControlLabel>
          <FormControl type='Text' placeholder='top text'></FormControl>
        </FormGroup>
        <formGroup>
          <ControlLabel>Bottom</ControlLabel>
          <FormControl type="text" placeholder="botton text"></FormControl>
        </formGroup>
      </Form>
    )
  }
}

export default MemeGenerator;
