import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Form } from 'react-bootstrap';

class AddList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            type: '',
            amount: '',
            address: '',
            status: '',
            delivere: '',
        };
    }

    move = () => {
        $.ajax({
            type: 'POST',
            url: 'http://localhost/Scan-Tracking/Scan-Tracking/server/create.php',
            data: { id: this.state.id, address: this.state.address, status: this.state.status, delivere: this.state.delivere, name: "scanned" },
        });
        window.location.href = '/'
    }

    del = () => {
        $.ajax({
            type: 'POST',
            url: 'http://localhost/Scan-Tracking/Scan-Tracking/server/delete.php',
            data: { id: this.state.id, name: "pending" },
        });
        window.location.href = '/'
    }

    numberChange = (event) => {
        this.setState({ id: event.target.value })
    }

    typeChange = (event) => {
        this.setState({ type: event.target.value })
    }

    amountChange = (event) => {
        this.setState({ amount: event.target.value })
    }

    handleSubmit = () => {
        var xxx = this.props.pendingList.find(element => element.id === this.state.id)
        if (xxx) {

            // this.move()
            // this.del()
        }
    }
    render() {
        return (
            <div className="float">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Tracking Number</Form.Label>
                        <input class="form-control" placeholder="xxxx-xxxx-xxxx" onChange={this.numberChange}></input>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Pracel Type</Form.Label>
                        <select class="form-control" id="exampleFormControlSelect1" onChange={this.typeChange}>
                            <option value="Normal">Normal</option>
                            <option value="Carton">Carton</option>
                            <option value="Frozen">Frozen</option>
                        </select>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="string" placeholder="0" onChange={this.amountChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddList;