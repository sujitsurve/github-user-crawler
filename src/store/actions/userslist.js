import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchUserList = (usersData) => {
    return {
        type: actionTypes.FETCH_USERLIST,
        usersData: usersData
    }
}
export const fetchUserListFailed = () => {
    return {
        type: actionTypes.FETCH_USERLIST_FAILED,
        usersData : []
    }
}
export const getUsersListData = (userInput) => {
    return dispatch => {
        axios.get("https://api.github.com/search/users?q=" + userInput+"&per_page=100")
            .then(response => {
                dispatch(fetchUserList(response.data.items));
            }).catch(err => {
                dispatch(fetchUserListFailed());
            })
    }
}