import React from 'react';
import TextField from '@material-ui/core/TextField';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="container-text-field--mobile">
    <label className='input-field'>{label}</label>
    <div>
      {/* <input {...input} placeholder={label} type={type} /> */}
      <TextField
          id={label}
          {...input}
          margin="normal"
        />
      
    </div>
    <br/>
    {touched && error && <span>{error}</span>}
    
  </div>
);

export default renderField;
