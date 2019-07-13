
import { CREATE_USER_REQUEST } from './types';



export const Nav_Items = (item) => {
    return {
        type: FOOTERNAV_ITEMS, 
        payload: item
    }
}; 


export const createUserRequest = (user) => {
    return {
        type: CREATE_USER_REQUEST, 
        user
    }
}; 

