import React, { Component } from 'react';
import Scanned from "./Scanned";
import { ListGroup, Alert, Badge } from 'react-bootstrap';


class ScannedList extends Component {

    render() {

        var newoder = this.props.scannedList.map((item, i) => {
            return <ListGroup.Item><Scanned number={item.id} address={item.scanaddress} status={item.scanstatus} delivere={item.delivere} key={i} /></ListGroup.Item>
        })
        var length = this.props.scannedList.length

        return (
            <div className="float">
                <Alert style={{ margin: 0 }} variant={'dark'}>Scanned
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

export default ScannedList;