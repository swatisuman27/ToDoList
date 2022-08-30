import React, { Component } from "react";

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Input: "",
      List: [],
    };
  }

  render() {
    const add = () => {
      if (this.state.Input !== "") {
        const Input = {
          value: this.state.Input,
        };
        const List = [...this.state.List];
        List.push(Input);

        this.setState({
          List,
          Input: "",
        });
      }
    };
    const edit = () => {};
    const del = () => {
      const List = [...this.state.List];
      this.setState({
        Input: (this.state.value = ""),
      });
    };
    return (
      <div>
        <input type={Text} />
        <button onClick={add}>Add</button>
        <button onClick={edit}>Edit</button>
        <button onClick={del}>Delete</button>
      </div>
    );
  }
}

export default ToDoList;
