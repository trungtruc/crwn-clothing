import React from 'react';

import './FormInput.scss';

const FormInput = (props) => (
  <div className='group'>
    <input className='form-input'
    onChange={props.handleInput}
    {...props}> 
    </input>
    { 
      props.label ? (<label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>{props.label}</label>) : null 
    }
  </div>
);

export default FormInput;