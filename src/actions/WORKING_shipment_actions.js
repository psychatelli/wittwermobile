
import { LCL_ACTIVE } from './types';
import { AIR_ACTIVE_SELECTED, AIR_COMPLETE_SELECTED, FCL_ACTIVE, FCL_COMPLETE, LCL_ACTIVE_SELECTED_NEW, FETCH_USERS_SELECTED,  
    ITEMS_HAS_ERRORED,
    ITEMS_IS_LOADING,
    ITEMS_FETCH_DATA_SUCCESS
} from './types';

export const LCLActiveSelectShipment = (shipment) => {
    console.log("You clicked on user:", shipment.first);
    return {
        type: LCL_ACTIVE,
        payload: shipment
    }
};


export const LCLCompleteSelectShipment = (shipment) => {
    return {
        type: LCL_COMPLETE,
        payload: shipment
    }
};


export const FCLActiveSelectShipment = (shipment) => {
    return {
        type: FCL_ACTIVE,
        payload: shipment
    }
};


export const FCLCompleteSelectShipment = (shipment) => {
    return {
        type: FCL_COMPLETE,
        payload: shipment
    }
};



export const AirCompleteSelectShipment = (AirItemC) => {
    return {
        type: AIR_COMPLETE_SELECTED, 
        payload: AirItemC
    }
};  
 
 
export const selectShipment = (shipment) => {
    console.log("You clicked on user:", shipment.first);
    return {
        type: AIR_ACTIVE_SELECTED, 
        payload: shipment
    }
};

// export const LCLShipment_New = (user) => {
//     return {
//         type: FETCH_USERS, 
//         payload: user
//     }
// }; 
 
// export const LCLShipment_New = () => {
//       return (dispatch) => {
//         fetch(`https://jsonplaceholder.typicode.com/users`)
//           .then(res => res.json())
//           .then(users => {
//             dispatch({
//               type: FETCH_USERS_SELECTED,
//               payload: users
//           })
//         })
//       }
//     }


export const LCL_ActiveSelectedShipment = (item) => {
    console.log("You clicked on user:", item.name);
    return {
        type: FETCH_USERS_SELECTED, 
        payload: item
    }
};




export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));
                // this.setState({ isLoading: false });

                return response;
            })
            .then((response) => response.json()) 
            .then((items) => dispatch(itemsFetchDataSuccess(items)))

            .catch(() => dispatch(itemsHasErrored(true)));
    };
}     



 