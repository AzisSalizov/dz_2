import {createStore, applyMiddleware} from 'redux';
import {marvelReducer} from './reducer/reducers';
import {thunk} from 'redux-thunk';

const store = createStore(
    marvelReducer,
    applyMiddleware(thunk)
);

export default store;
