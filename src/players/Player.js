import React, {Component} from 'react'

export default class Player extends Component {
    render() {
        return <p data-testid="player_name">{this.props.name}</p>
    }
}