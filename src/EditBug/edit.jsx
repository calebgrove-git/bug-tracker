import React from 'react';
import './edit.css';
export default (props) => {
  return (
    <div className='edit'>
      <button onClick={props.edit}>Edit</button>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
};
