import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { fetchData } from "./api"; 

function* getApiData(action) {
  console.log('saga grab');
  try {
   // do api call
   const data = yield call(fetchData);
   yield put(receiveApiData(data));
  } catch (e) {
  console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
} 


// SHOULD I PASS IN RECEIVE_API_DATA OR REQUEST_API_DATA.
//  ALSO, SHOULD I BE CALLING REQUEST_API_DATA FROM "./actions" OR "./actions/types"
// should I be passing in data in this line 'yield put(receiveApiData(data));'