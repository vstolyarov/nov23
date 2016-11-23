import React, { Component } from 'react';
import batman from './batman-1.svg';
import './App.css';

class App extends Component {
	 constructor(props) {
	    super(props);
	        
	  this.state={
	    num: 10
	    } 
	  
	  
	  
	  }

  render() {
  	
    return (
      <div className="App">
        <div className="App-header">
   
          <img src={batman} className="App-logo" alt="batmanlogo" />
                 <h1>
          {this.state.num}
				</h1>
          <h2>{name}</h2>
        </div>
        <p className="App-intro">
          Welcome home Mr. Wayne. {this.state.num} 
          <br/>
          Welcome home {this.props.name}
          <br/>
          This age {this.props.age}
        </p>
      </div>
    );
  }
}

export default App;
