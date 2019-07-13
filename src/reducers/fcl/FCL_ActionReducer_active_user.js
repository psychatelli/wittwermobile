

import { FCL_ACTIVE } from '../../actions/types';


export default (state={}, action) => {
    switch(action.type) {

        case FCL_ACTIVE:
            return action.payload;
            break; 
       
    } 
    return state;
};


  