import React, { Component } from "react";

import { Itemlist } from "./components/item-list/item-list";
import { SearchBox } from "./components/searchBox/searchBox";
import "./app.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ users: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="container">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange}></SearchBox>
        <Itemlist users={filteredUsers} />
      </div>
    );
  }
}
export default App;
