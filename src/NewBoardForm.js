import React, { Component } from "react";

export default class NewBoardForm extends Component {
  handleValue = (event) => {
    this.props.parentValueCallback(event.target.myname.value);
    event.preventDefault();
  };

  handleSubmit = (event) => {
    this.props.parentNameCallback(event.target.myname.value);
    event.preventDefault();
  };

  render() {
    return (
      <div className="form_container">
        <div className="inputs">
          <label htmlFor=""></label>
          <input className="form_input" type="text" placeholder="Podaj Imię" />
          <input className="form_input" type="text" placeholder="Wpisz hasło" />
        </div>
        <div className="form_buttons">
          <button className="next_btn" onClick={this.handleValue}>
            Następne
          </button>
          <button className="board_generator" onClick={this.handleSubmit}>
            Generuj Bingo!
          </button>
        </div>
      </div>
    );
  }
}
