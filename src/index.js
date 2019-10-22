import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { Values } from 'redux-form-website-template';
import store from './store';
import showResults from './showResults';
import WizardForm from './WizardForm';

const rootEl = document.getElementById('root');

require('./styles/main.scss')

ReactDOM.render(
  <Provider store={store}>
    <div className='container container-form'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 col-sm-12'>
          <h2>Leading Up</h2>
          <WizardForm onSubmit={showResults} />
          {/*<Values form='wizard' />*/}
        </div>
      </div>
    </div>
  </Provider>,
  rootEl
);