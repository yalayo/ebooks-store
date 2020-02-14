import React from 'react'
import { Collection, CollectionItem } from 'react-materialize'

const PlayersList = ({ playersNames }) => (
    <Collection header="Players">
        {
            playersNames.length === 0 ?
            (
                <CollectionItem style={{ color: 'gray' }}>(none added yet)</CollectionItem>
            )
            :
            (
                playersNames.map(playerName => (
                    <CollectionItem key={playerName}>{playerName}</CollectionItem>
                ))
            )
        }
    </Collection>
)

export default PlayersList