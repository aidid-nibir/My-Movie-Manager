import './index.css';
import App from './App';
import React from 'react';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'

const loggerAsMiddleware = (store) => {
  return (next) => {
    return (action) => {
      // console.log('[Middleware] Dispatching ', action);
      const result = next(action)
      // console.log("Going into Next State ", store.getState());
      return result;
    }
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerAsMiddleware, thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

reportWebVitals();
