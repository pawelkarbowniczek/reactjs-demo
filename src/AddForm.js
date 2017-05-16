/**
 * Created by pawel on 16.05.2017.
 */
import React, {Component} from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {id: '', name: '', picture: '', description: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({id: event.target.value});
    }

    handleSubmit(event) {
        console.log('A fan page was submitted : ' + this.state.id);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Fan page Id:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default AddForm;