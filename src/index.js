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
    <ConnectedRouter history={history}>
      <div>
        <Route path='/person-show' component={Person}/>
      </div>
    </ConnectedRouter>
    <App />
</Provider>, 
document.getElementById('root'));

registerServiceWorker();
