import React,{Component} from 'react';
import MemeGenerator from './MemeGenerator';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2><u>Welcome to the Meme Generator!</u></h2>
        <i>Write Some Text</i>
        <MemeGenerator />
      </div>
    )
  }
}

export default App;
