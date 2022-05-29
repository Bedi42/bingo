import React, { Component } from 'react';
import ValuesForm from './ValuesForm';
import NameForm from './NameForm';
import Square from './Square';

export default class Board extends Component {
  state = {
    userName: '',
    squares: [],
    checkingSquares: Array(16).fill(false),
  };

  handleClick = (i) => {
    this.setState((prev) => ({
      checkingSquares: [
        ...prev.checkingSquares.slice(0, i),
        !prev.checkingSquares[i],
        ...prev.checkingSquares.slice(i + 1, prev.checkingSquares.length),
      ],
    }));
    console.log(i);
    console.log(this.state.checkingSquares);
  };

  handleNameCallback = (childData) => {
    this.setState({ userName: childData });
  };
  handleValueCallback = (childData) => {
    this.setState((prevState) => ({
      squares: [...prevState.squares, childData],
    }));
  };
  renderSquares = () => {
    let all = [];
    for (let i = 0; i < 16; i++) {
      all.push(
        <Square
          key={i}
          onClick={() => this.handleClick(i)}
          value={this.state.squares[i]}
        />
      );
    }
    return all.map((el) => el);
  };
  render() {
    return (
      <>
        <h2 className='name'>{this.state.userName}</h2>
        <div className='board'>{this.renderSquares()}</div>
        <NameForm parentNameCallback={this.handleNameCallback} />
        <ValuesForm parentValueCallback={this.handleValueCallback} />
      </>
    );
  }
}
