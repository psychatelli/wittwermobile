
// REDUCERS > LCL_REDUCER_ACTIVE_USER_DATA.JS

import { LCL_ACTIVE } from '../../actions/types';


export default (state={}, action) => {
    switch(action.type) {

        case LCL_ACTIVE:
            return action.payload;
            break; 
       
    } 
    return state;
};
