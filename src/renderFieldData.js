import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import itLocale from 'date-fns/locale/it';

const renderFieldData = ({ input, label, meta: { touched, error } }) => (
  <div className="container-input--mobile">
    <label className='input-field'>{label}</label>
      <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={itLocale}>
        <DatePicker 
          {...input}
          value={input.value || new Date()} 
          format='dd/MM/yyyy'
          name="startDate"
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          maxDate={new Date()}
        />
      </MuiPickersUtilsProvider>
      </div>
    <br/>
    {touched && error && <span>{error}</span>}
    
  </div>
);

export default renderFieldData;