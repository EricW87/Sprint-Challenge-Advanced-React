import React from 'react';
import PlayerCard, {AltPlayerCard} from './PlayerCard.js';

const PlayerList = (props) => {

    let players = props.players;

    if(props.country != null)
    {
        players = players.filter((player) =>
            player.country.includes(props.country)
        );
    }

    if(props.name != null)
    {
        players = players.filter((player) =>
            player.name.includes(props.name)
        );
    }

    if(!props.altview)
        return (
            <>
                <h1 className="players-title">Players List</h1>
                <table className="player-list">
                    <thead>
                        <tr>
                            <th className="player-name">Name</th>
                            <th>Country</th>
                            <th>Searches</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                    {players.map((player) => 
                        <PlayerCard key={player.id} player={player} />
                    )}
                    </tbody>
                </table>
            </>
        );
    else if(props.altview)
        return (
            <>
                <h1 className="players-title">Players</h1>
                <div className="Alt-Player-List">
                    {players.map((player) => 
                        <AltPlayerCard key={player.id} player={player} />
                    )}
                </div>
            </>
        )
};

export default PlayerList;