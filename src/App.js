import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./components/child";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demo: "",
      title: "Click Here",
      greeting: "Welcome to React",
      userName: "Akshata"
    };
  }

  // changeTitle = () => {
  //   this.setState({ demo: "uiortyer" });
  //   // this.state.demo = "uiortyer";
  // };

  // componentWillMount() {
  //   this.setState({ demo: "fhgjdg" });
  // }

  // onClick = () => {
  //   this.child.getAlert();
  // };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <label>{this.state.demo}</label>
        <br />
        <button onClick={this.changeTitle}>{this.state.title}</button>
        <br /> */}
        <button>{this.state.title}</button>
        <Child greeting={this.state.greeting} />
        <Child userName={this.state.userName} />
      </div>
    );
  }
}
export default App;
