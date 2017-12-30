import React,{Component} from 'react';
import MemeGenerator from './MemeGenerator';
import MemeSelection from './MemeSelection';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>Welcome to the Meme Generator!</h2>
        <i>Write Some Text</i>
        <MemeGenerator />
        <MemeSelection />
      </div>
    )
  }
}

export default App;
