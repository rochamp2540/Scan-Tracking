import React, { Component } from 'react';
import $ from 'jquery';

class Pending extends Component {

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
            data: { id: this.state.number, address: this.state.address, status: this.state.status, delivere: this.state.delivere, name: "scanned" },
        });
        window.location.href = '/'
    }

    del = () => {
        $.ajax({
            type: 'POST',
            url: 'http://localhost/Scan-Tracking/Scan-Tracking/server/delete.php',
            data: { id: this.state.number, name: "pending" },
        });
        window.location.href = '/'
    }

    render() {
        return (
            <tr onClick={() => { this.move(); this.del(); }} className="p">
                <h5 >
                    {this.state.number}
                </h5>
                <h6>
                    {this.state.address}
                </h6>
                <h6 >
                    {this.state.status}
                </h6>
                <div>
                    {this.state.delivere}
                </div>
            </tr>
        );
    }
}

export default Pending;