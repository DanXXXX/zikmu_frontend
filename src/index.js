import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './pages/reducers'
import { BrowserRouter } from 'react-router-dom';
import { getUsers } from './actions/users.actions';
import { getPosts } from './actions/post.actions';

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
)

store.dispatch(getUsers());
store.dispatch(getPosts());

ReactDOM.render(
  <BrowserRouter>
    < Provider store={store} >
      <React.StrictMode>
        <App />
      </React.StrictMode>

    </Provider >
  </BrowserRouter>,
  document.getElementById('root')
)
reportWebVitals();

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
