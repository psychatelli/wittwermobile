import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AllReducers from '../src/reducers';
import thunk from 'redux-thunk';



 const initialState = {

 }

export default (initialState) => {
  return createStore(
    AllReducers,
    initialState,
      applyMiddleware(thunk)
  )
} 


