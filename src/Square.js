import React from 'react';

export default function Square(props) {
  return (
    <div style={props.style} onClick={props.onClick} className='square'>
      {props.value}
    </div>
  );
}
