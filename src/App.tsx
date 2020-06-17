import React, { ChangeEvent } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Component } from "react";
import {SearchBox}from "./components/search-box/search-box.component"

interface IProps {}
interface IState {
  monsters: Array<{ name: string; id: string; email: string }>;
  searchField: String;
}
class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({searchField: e.currentTarget.value})
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Dex</h1>
        <SearchBox 
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
