import React from 'react';
import axios from 'axios';
import PlayerList from './PlayerList.js';

class  PlayerClass extends React.Component {
    constructor(props) {
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
          <>
            <PlayerList country={this.props.country} name={this.props.name} players={this.state.players} altview={this.props.altview}/>
          </>
      );
    }
  }

  export default PlayerClass;