import React, {Component} from 'react'
import { Button, Col, Row } from 'react-materialize'
import NewPlayerForm from './NewPlayerForm'
import PlayersList from './PlayersList'

export default class Players extends Component {
    state = { 
        playersNames: [],
        showNewPlayerForm: false 
    }

    handleShowNewRestaurantForm = () => {
        this.setState({ showNewPlayerForm: true })
    }
    
    handleAddPlayer = (newPlayerName) => {
        this.setState(state => ({
            showNewPlayerForm: false,
            playersNames: [
                newPlayerName,
                ...state.playersNames
            ]
        }))
    }
    
    render() {
        const { 
            playersNames,
            showNewPlayerForm 
        } = this.state

        return (
            <div>
                <Row>
                    <Button data-test="add_player_button" onClick={this.handleShowNewRestaurantForm}>
                        Add player
                    </Button>
                </Row>

                <Row>
                    {
                        showNewPlayerForm ? <NewPlayerForm onSave={this.handleAddPlayer}/> : null
                    }
                </Row>
                
                <Row>
                    <PlayersList playersNames={playersNames} />
                </Row>
            </div>
        )
    }
}