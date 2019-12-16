import React from 'react';
import PlayerCard from './PlayerCard.js';

const PlayerList = (props) => {
    return (
        <table className="player-list">
            <tbody>
            {props.players.map((player) => 
                <PlayerCard key={player.id} player={player} />
            )}
            </tbody>
        </table>
    );
};

export default PlayerList;