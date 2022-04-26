import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';
const middlewares = [thunk];

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;
