//REDUCER INDEX.JS
import { combineReducers } from 'redux';

import FCL_active_reducer_data from './fcl/FCL_reducer_data';
import FCL_active_reducer from './fcl/FCL_ActionReducer_active_user';

import Air_active_reducer_data from './air/air_active_actionreducer_data';
import Air_active_reducer from './air/air_active__actionreducer_shipment';

import Air_complete_reducer_data from './air/air_complete_reducer_data';
import Air_complete_reducer from './air/air_complete_reducer';

import FooterNav_reducer_data from './footer_nav/footer_reducer_data';


import { items, itemsHasErrored, itemsIsLoading, selectedItem } from './lcl/LCL_new';



const AllReducers = combineReducers({


  FCL_active_reducer_data: FCL_active_reducer_data,
  FCL_active_reducer: FCL_active_reducer,

  Shipments : Air_active_reducer_data,
  Air_Active_Shipment_Reducer : Air_active_reducer, //This is the recuer to show the selected shipment

  Air_complete_reducer_data : Air_complete_reducer_data,
  Air_complete_reducer : Air_complete_reducer, 

  FooterNav_reducer_data: FooterNav_reducer_data,

  items,
  itemsHasErrored,
  itemsIsLoading,
  selectedItem
});


export default AllReducers;  