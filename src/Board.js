import React, { Component } from "react";
import NewBoardForm from "./NewBoardForm";
import Square from "./Square";

export default class Board extends Component {
  state = {
    userName: "",
    squares: [],
  };
  renderSquares = () => {
    let all = [];
    for (let i = 0; i < 16; i++) {
      all.push(<Square key={i} value={this.state.squares[i]} />);
    }
    return all.map((el) => el);
  };

  handleNameCallback = (childData) => {
    this.setState({ userName: childData });
  };
  handleValueCallback = (childData) => {
    this.setState((prevState) => ({
      squares: [...prevState.squares, childData],
    }));
  };

  render() {
    return (
      <>
        <h2 className="name">{this.state.userName}</h2>
        <div className="board">{this.renderSquares()}</div>
        <NewBoardForm
          parentNameCallback={this.handleNameCallback}
          parentValueCallback={this.handleValueCallback}
        />
      </>
    );
  }
}
