import React from 'react';

const PlayerCard = (props) => {
    const player = props.player;
    return (
        <tr className="player">
            <td className="player-name">{player.name}</td>
            <td>{player.country}</td>
            <td>{player.searches}</td>
            <td>{player.id}</td>
        </tr>
    );
};

export const AltPlayerCard = (props) => {
    const player = props.player;
    return (
        <div className="Alt-player-card">
            <h3>{player.name}</h3>
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
        </div>
    );
};

export default PlayerCard;