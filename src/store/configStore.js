import { createStore, applyMiddleware } from 'redux';
import noteReducer from '../reducer/reducer';
import thunk from 'redux-thunk';

// const store = createStore(() => ({notes: ['deepthi']}), applyMiddleware(thunk));
const store = createStore(noteReducer, applyMiddleware(thunk));


export default store;