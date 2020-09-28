import React, { Component } from 'react';
import Pending from "./Pending";
import { ListGroup, Alert, Badge } from 'react-bootstrap';


class PendingList extends Component {

    render() {

        var newoder = this.props.pendingList.map((item, i) => {
            return <ListGroup.Item><Pending number={item.id} address={item.penaddress} status={item.penstatus} delivere={item.delivere} key={i} /></ListGroup.Item>
        })
        var length = this.props.pendingList.length

        return (
            <div className="float">
                <Alert style={{ margin: 0 }} variant={'dark'}>Pending Tracking
                    <h6>
                        <Badge variant="secondary">{length}</Badge>
                    </h6>
                </Alert>
                <ListGroup>
                    {newoder}
                </ListGroup>
            </div>
        );
    }
}

export default PendingList;