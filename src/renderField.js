import React from 'react';
import TextField from '@material-ui/core/TextField';
const focusUsernameInputField = input => {
  if (input) {
    setTimeout(() => {input.focus()}, 100);
  }
};
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="container-text-field--mobile">
    <label className='input-field'>{label}</label>
    <div>
      {/* <input {...input} placeholder={label} type={type} /> */}
      <TextField
          id={label}
          {...input}
          margin="normal"
          type={type}
          inputRef={focusUsernameInputField}
        />
      
    </div>
    <br/>
    {touched && error && <span>{error}</span>}
    
  </div>
);

export default renderField;
