export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        
        

        default:
            return state;
    }
}

export function items(state = [], action) {

    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        case 'FETCH_USERS_SELECTED':
            return action.payload;
        default:
            return state;
    }
}

export function selectedItem(state = [], action) {
    switch (action.type) {
        case 'FETCH_USERS_SELECTED':
            return action.payload;
            Console.log('this is your reducer:', selectedItem)

        default:
            return state;
    }
}



