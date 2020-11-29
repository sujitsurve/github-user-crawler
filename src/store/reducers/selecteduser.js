import * as actionTypes from '../actions/actionTypes';

const initialState = {
    followeData: [],
    repoData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FOLLOWER_LIST:
            return {
                ...state,
                followeData : action.followeData
            }
        case actionTypes.FETCH_FOLLOWER_LIST_FAILED:
            return {
                ...state,
                followeData : []
            }
        case actionTypes.FETCH_REPO_LIST:
            return {
                ...state,
              repoData :action.repoData
               
            }
        case actionTypes.FETCH_REPO_LIST_FAILED:
            return {
                ...state,
                repoData : []
            }
        default:
            return state
    }
}

export default reducer;