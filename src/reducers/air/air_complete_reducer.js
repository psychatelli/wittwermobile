
// REDUCERS > LCL_REDUCER_ACTIVE_USER_DATA.JS

import { AIR_COMPLETE_SELECTED }  from '../../actions/types'; 

export default (state={}, action) => {
    switch(action.type) {
        
        case AIR_COMPLETE_SELECTED:
            return action.payload;
            break;
    }
    return state;
};



