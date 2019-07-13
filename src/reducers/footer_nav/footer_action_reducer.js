

import { FOOTERNAV_ITEMS } from '../../actions/types';


export default (state={}, action) => {
    debugger;
    switch(action.type) {

        case FOOTERNAV_ITEMS:
            debugger;
            return action.payload;
            break; 
       
    } 
    return state;
};


  