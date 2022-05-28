import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  state = {
    userName: '',
    squares: Array(16).fill('pusto'),
  };
  renderSquares = () => {
    let all = [];
    for (let i = 0; i < 16; i++) {
      all.push(<Square key={i} value={this.state.squares[i]} />);
    }
    return all.map((el) => el);
  };
  render() {
    return (
      <>
        <h2 className='name'>Krzychu</h2>
        <div className='board'>{this.renderSquares()}</div>
      </>
    );
  }
}
