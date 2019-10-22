import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import Index from './component/Card/Index';
import renderFieldRadio from './component/Card/Index';

var teams = [{
  title: "Flight",
  img: "./img/flight.jpg"
}, {
  title: "Train",
  img: "./img/train.jpg"
}, {
  title: "Car",
  img: "./img/car.jpg"
}];

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  //const renderFieldRadio = (input) => (<Index title="Pick a team" cardContents={teams}/>);
  return (
    
    <div>
      <div>
        <div className="intestazione-form">
          <h4>
            Step2: Transport Information
          </h4>
          <p>To calculate the effective time of your arrival at the appartment we also need to know the type of trasportation you will use to get there:</p>
        </div>
      </div>
    
      <form onSubmit={handleSubmit} className="form-flex" autoComplete="off">
        <Field name="mezzo" component={renderFieldRadio} />
      

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
})(WizardFormThirdPage);
