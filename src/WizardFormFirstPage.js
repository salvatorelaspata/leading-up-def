import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import renderFieldData from './renderFieldData';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <div>
        <div className="intestazione-form">
          <h4>
            Thanks for yout booking!!!
          </h4>
          <p>To complete the reservation you need to provide the information required in the following steps.</p>
          <p>Please insert your email and the start date of your stay.</p>
        </div>
      </div>
    
      <form onSubmit={handleSubmit} className="form-flex" autoComplete="off">
        <Field
          name="startDate"
          type="text"
          component={renderFieldData}
          label="Start date"
        />
        {/* <Field
          name="emailField"
          type="text"
          component={renderField}
          label="Insert your mail."
        /> */}
        
        <Field name="email" type="email" component={renderField} label="Email" />

        <div>
          <button type="submit" className="next">Login</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
