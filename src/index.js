import React from 'react';
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux'
// import { browserHistory } from 'react-router'
import { Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import history from './history' 
import { FindPersonForm } from './Components/FindPersonForm';
import { AddPersonForm } from './Components/AddPersonForm'; 
import { Person } from './Components/Person';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)


ReactDOM.render(
<Provider store={store}> 
   <Router history= {history}> 
   <div> 
   <Route path='/person-show' component={Person}/> 
   <Route path='/add-person' component={AddPersonForm}/>
    <App /> 
    </div>
    </Router>
</Provider>,
document.getElementById('root'));

registerServiceWorker();
