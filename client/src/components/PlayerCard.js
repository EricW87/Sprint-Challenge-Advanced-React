import React from 'react';

const PlayerCard = (props) => {
    const player = props.player;
    return (
        <tr className="player">
            <td class="player-name">{player.name}</td>
            <td>{player.country}</td>
            <td>{player.searches}</td>
            <td>{player.id}</td>
        </tr>
    );
};

export default PlayerCard;