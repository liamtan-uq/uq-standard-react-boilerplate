import Api from '../utils/Api';
import { Dispatch } from 'redux';

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

// Example async action creator.
export const fetchUsers = () => async (dispatch: Dispatch) => {
    // Conditionally modify state based on payload response
    try {
        // According to reducer will put global state into loading state
        dispatch({
            type: "FETCH_USERS",
        });
        const response = await Api.getUsers(); 
        return dispatch({
            type: "FETCH_USERS_SUCCESS",
            users: response,
        });
    } catch (error) {
        console.error(error);
        return dispatch({
            type: "FETCH_USERS_ERROR",
            error,
        });
    }
}