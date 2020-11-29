import * as actionTypes from '../actions/actionTypes';

const initialState = {
    usersData : [],
    spinner : true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERLIST:
            return {
                ...action,
                spinner: false
            }
            case actionTypes.FETCH_USERLIST_FAILED:
            return {
                ...action,
                spinner: true
            }
        default:
            return state
    }
}

export default reducer;