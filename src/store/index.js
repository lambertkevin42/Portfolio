import { createStore, compose, applyMiddleware } from 'redux';
import burgerreducer from '../reducers/burgerreducer';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  burgerreducer,
  composeEnhancers(applyMiddleware()),
);

export default store;