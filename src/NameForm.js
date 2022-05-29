import React, { Component } from 'react';

export default class NameForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.parentNameCallback(event.target.userName.value);
    event.target.userName.value = '';
    event.target.style.display = 'none';
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
            placeholder='Podaj Imię'
          />
        </div>
        <div className='form_buttons'>
          <button type='submit' className='board_generator'>
            Dodaj Imię
          </button>
        </div>
      </form>
    );
  }
}
