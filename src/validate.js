const validate = values => {
  console.log('values', values);
  const errors = {};
  /**start - LOGIN**/
  if(!values.startDate){
    values.startDate = new Date();
    /* errors.startDate = 'Required' */
  } 
  if(!values.emailField){
    errors.emailField = 'Required';
  }
  /**end - LOGIN**/

  /**start - STEP1**/
  if (!values.telephone) {
    errors.telephone = 'Required';
  }
  /**start - STEP1**/
  return errors;
};

export default validate;
