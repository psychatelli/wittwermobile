
// REDUCERS > LCL_REDUCER_ACTIVE_USER_DATA.JS

import { AIR_ACTIVE_SELECTED }  from '../../actions/types';


export default (state={}, action) => {
    switch(action.type) {       
        case AIR_ACTIVE_SELECTED:
            return action.payload;
            break;
    }
    return state;
};


