import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import DisplayHogs from "./DisplayHogs";

class App extends Component {

  // logHogs = (event) => {
  //   console.log(hogs)
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        {/* <HelloWorld /> */}
        <DisplayHogs hogs={hogs}/>
        {/* <button onClick={this.logHogs}>Log hogs</button> */}
      </div>
    );
  }
}

export default App;
