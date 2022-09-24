import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducer/todoReducer';
const middleware = [thunk];

const store = createStore(todoReducer, applyMiddleware(...middleware));
export default store;
