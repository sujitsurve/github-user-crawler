import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchFollwerList = (followeData) => {
    return {
        type: actionTypes.FETCH_FOLLOWER_LIST,
        followeData: followeData
    }
}
export const fetchFollwerListFailed = () => {
    return {
        type: actionTypes.FETCH_FOLLOWER_LIST_FAILED,
        followeData : []
    }
}
export const getFollwersData = (followerApi) => {
    return dispatch => {
        axios.get(followerApi)
            .then(response => {
                dispatch(fetchFollwerList(response.data));
            }).catch(err => {
                dispatch(fetchFollwerListFailed());
            })
    }
}
export const fetchRepoList = (repoData) => {
    return {
        type: actionTypes.FETCH_REPO_LIST,
        repoData: repoData
    }
}
export const fetchRepoListFailed = () => {
    return {
        type: actionTypes.FETCH_REPO_LIST_FAILED,
        repoData : []
    }
}
export const getRepoData = (url) => {
    return dispatch => {
        axios.get(url)
            .then(response => {
                dispatch(fetchRepoList(response.data));
            }).catch(err => {
                dispatch(fetchRepoListFailed());
            })
    }
}