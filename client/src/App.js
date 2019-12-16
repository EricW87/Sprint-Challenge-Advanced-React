import React from 'react';
import axios from 'axios';
import PlayerList from './components/PlayerList.js';
import './App.css';

class  App extends React.Component {
  constructor() {
    super();
    this.state = { players: null }
      
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then( res => {
        console.log(res.data);
        this.setState( {players: res.data}, 
        () => console.log(this.state) );
      })
      .catch( err => {
        console.log(`Error in downloadPlayer: ${err}`);
      });
  };

  render() {
      if(!this.state.players) return null;

      return (
        <div className="App">
          <PlayerList players={this.state.players} />
        </div>
    );
  }
}

export default App;
