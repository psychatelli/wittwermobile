

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {receiveHelloWorld } from "./actions";
import { REQUEST_HELLO_WORLD, RECEIVE_HELLO_WORLD } from "./actions/types";
  
//import { FIND_ALL_ITEMS } from './actions';
// call feathers api -> result -> dispatch an action -> reduce action - updates the state -> ui changes


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) { 
  try {
     yield put({type: RECEIVE_HELLO_WORLD, text: "Hello world from redux saga!"});
  } catch (e) {
     //Handling for error
  }
}

 
export default function* rootSaga() {
    yield takeLatest(RECEIVE_HELLO_WORLD, helloWorld);
}