import { createStore, compose, applyMiddleware } from 'redux';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(

  composeEnhancers(applyMiddleware()),
);

export default store;