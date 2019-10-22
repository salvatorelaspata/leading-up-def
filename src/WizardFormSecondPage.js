import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <div>
      <div>
        <div className="intestazione-form">
          <h4>
            Step1: Addictional Information
          </h4>
          <p>To facilitate your check in we need the follow Information</p>
        </div>
      </div>
    
      <form onSubmit={handleSubmit} className="form-flex" autoComplete="off">
        
        <Field name="telephone" type="tel" component={renderField} label="Telephone" />

        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">Next</button>
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
})(WizardFormSecondPage);
