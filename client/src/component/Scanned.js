import React, { Component } from 'react';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
class Scanned extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: this.props.number,
            address: this.props.address,
            status: this.props.status,
            delivere: this.props.delivere

        }
    }
    move = () => {
        $.ajax({
            type: 'POST',
            url: 'http://localhost/Scan-Tracking/Scan-Tracking/server/create.php',
            data: { id: this.state.number, address: this.state.address, status: this.state.status, delivere: this.state.delivere, name: "pending" },
        });
        window.location.href = '/'
    }

    del = () => {
        $.ajax({
            type: 'POST',
            url: 'http://localhost/Scan-Tracking/Scan-Tracking/server/delete.php',
            data: { id: this.state.number, name: "scanned" },
        });
        window.location.href = '/'
    }

    render() {
        return (
            <tr className="p">
                <h5 >
                    {this.state.number}
                </h5>
                <h6>
                    {this.state.status}
                </h6>
                <Button variant="danger" onClick={() => { this.move(); this.del(); }} >cancel</Button>
            </tr>
        );
    }
}

export default Scanned;