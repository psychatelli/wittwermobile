//REDUCER INDEX.JS
import { combineReducers } from 'redux';
import LCL_active_reducer_data from './lcl/LCL_reducer_data';
import LCL_active_reducer from './lcl/LCL_ActionReducer_active_user';

import Air_active_reducer_data from './air/air_active_actionreducer_data';
import Air_active_reducer from './air/air_active__actionreducer_shipment';

import Air_complete_reducer_data from './air/air_complete_reducer_data';
import Air_complete_reducer from './air/air_complete_reducer';

const AllReducers = combineReducers({
  //users: UserReducer,
  LCL_active_reducer_data: LCL_active_reducer_data,
  //activeUser: ActiveUserReducer,
  LCL_active_reducer: LCL_active_reducer,

  Shipments : Air_active_reducer_data,
  Air_Active_Shipment_Reducer : Air_active_reducer,

  Air_complete_reducer_data : Air_complete_reducer_data,
  Air_complete_reducer : Air_complete_reducer, 
});

export default AllReducers;  