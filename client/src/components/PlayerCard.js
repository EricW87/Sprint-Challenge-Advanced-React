import React from 'react';

const PlayerCard = (props) => {
    const player = props.player;
    return (
        <tr className="player">
            <th>{player.name}</th>
            <th>{player.country}</th>
            <th>{player.searches}</th>
            <th>{player.id}</th>
        </tr>
    );
};

export default PlayerCard;