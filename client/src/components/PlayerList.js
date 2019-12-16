import React from 'react';
import PlayerCard from './PlayerCard.js';

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

    return (
        <table className="player-list">
            <thead>
                <tr>
                    <th class="player-name">Name</th>
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
    );
};

export default PlayerList;