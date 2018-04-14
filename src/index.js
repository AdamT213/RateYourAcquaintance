import React from 'react';
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router' 
import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Person from './Components/Person'
import { FindPersonForm } from './Components/FindPersonForm';
import { AddPersonForm } from './Components/AddPersonForm';

const history = createHistory() 

const middleware = routerMiddleware(history)

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)


ReactDOM.render( 
<Provider store={store}> 
  <div>
    <ConnectedRouter history={history}>
      <div> 
        <Route exact path='/' component={FindPersonForm}/>
        <Route path='/person-show' component={Person}/> 
        <Route path='/add-person' component={AddPersonForm}/>
      </div>
    </ConnectedRouter>
    <App /> 
  </div>
</Provider>, 
document.getElementById('root'));

registerServiceWorker();
