import React, { Component } from "react";
import Header from "./Header";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ name: data }));
    console.log("hello");
  }

  render() {
    return (
      <div>
        <h1>shashi</h1>
        {this.state.name.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
        <Header />
      </div>
    );
  }
}
export default App;