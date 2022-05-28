import React, { Component } from "react";

export default class NewBoardForm extends Component {
  render() {
    return (
      <div className="form_container">
        <div className="inputs">
          <label htmlFor=""></label>
          <input className="form_input" type="text" placeholder="Podaj Imię" />
          <input className="form_input" type="text" placeholder="Wpisz hasło" />
        </div>
        <div className="form_buttons">
          <button className="next_btn">Następne</button>
          <button className="board_generator">Generuj Bingo!</button>
        </div>
      </div>
    );
  }
}
