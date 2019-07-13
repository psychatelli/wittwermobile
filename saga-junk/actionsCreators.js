import { REQUEST_API_DATA, RECEIVE_API_DATA} from './types';

 

export const requestApiData = () => { 
    debugger;
    console.log('requestApiData grab');

    return {
    type: REQUEST_API_DATA 
    }
};
export const receiveApiData = data => { 
    debugger;
    console.log('receiveApiData grab');

    return {
    type: RECEIVE_API_DATA, 
    data 
    }
};
 
// export const requestApiData = () => ({ 
//     type: REQUEST_API_DATA 
// });

// export const receiveApiData = data => ({ 
//     type: RECEIVE_API_DATA, data 
// });



//WHICH FORMAT SHOULD I USE

 