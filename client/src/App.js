import React, { Component } from 'react';
import $ from 'jquery';
import './App.css'
import PendingList from "./component/PendingList"
import ScannedList from "./component/ScannedList"
import AddList from "./component/AddList"


class App extends Component {
  state = {
    pendingList: [],
    // addList: "gg",
    scannedList: []
  }

  componentWillMount() {
    $.ajax({
      type: 'GET',
      url: `http://localhost/Scan-Tracking/Scan-Tracking/server/list.php`,
      success: resJson => {
        const res = JSON.parse(resJson);
        this.setState({
          pendingList: res
        });
      },
    });
    $.ajax({
      type: 'GET',
      url: `http://localhost/Scan-Tracking/Scan-Tracking/server/list2.php`,
      success: resJson => {
        const res = JSON.parse(resJson);
        this.setState({
          scannedList: res
        });
      },
    });
  }

  render() {
    // console.log(this.state.pendingList)
    return (
      <div className="App">
        <h1>Scan Tracking</h1>
        <PendingList pendingList={this.state.pendingList} />
        <AddList pendingList={this.state.pendingList} />
        <ScannedList scannedList={this.state.scannedList} />
      </div>
    );
  }
}

export default App;