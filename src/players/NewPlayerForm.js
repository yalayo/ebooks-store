import React, {Component} from 'react'
import { Button, Input, Row } from 'react-materialize'
import { Formik } from 'formik'

export default class NewPlayerForm extends Component {

    handleSave = (values) => {
        const { playerName } = values
        const { onSave } = this.props

        onSave(playerName)
    }

    renderForm = ({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <Input 
                name="playerName"
                label="Player name" 
                data-testid="new_player_name" 
                value={values.playerName} 
                onChange={handleChange}
                s={12} m={8} l={10} />

            <Button type="submit" data-testid="save_player_button" onClick={this.handleSave} s={12} m={4} l={2}>
                Save
            </Button>
        </form>
    )

    render() {
        return (
            <Row>
                <Formik initialValues={{ playerName: ''}} onSubmit={this.handleSave}>
                    {this.renderForm}
                </Formik>
            </Row>
        )
    }
}