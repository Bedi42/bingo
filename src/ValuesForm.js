import React, { Component } from 'react';

export default class ValuesForm extends Component {
  state = {
    counter: 0,
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let et = event.target;
    this.props.parentValueCallback(et.userName.value);
    et.userName.value = '';
    et.userName.value === ''
      ? alert('Wpisz wartość')
      : this.setState((prev) => ({ counter: prev.counter + 1 }));
    if (this.state.counter === 16) event.target.style.display = 'none';
    console.log(this.state.counter);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form_container'>
        <div className='inputs'>
          <label htmlFor=''></label>
          <input
            className='form_input'
            name='userName'
            type='text'
            placeholder='Podaj wartość'
          />
        </div>
        <div className='form_buttons'>
          <button type='submit' className='board_generator'>
            Dodaj wartość
          </button>
        </div>
      </form>
    );
  }
}
