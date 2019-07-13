import { RECEIVE_API_DATA } from "../actions";
//import { RECEIVE_API_DATA } from "../actions"; 


export default (state = {}, { type, data = [] }) => {
  //console.trace();

  switch (type) {
    case RECEIVE_API_DATA:
    console.log('data grab');

      return  data ;
      debugger;
    default:
      return state;

  }
};

