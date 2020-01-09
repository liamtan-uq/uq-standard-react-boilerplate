import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "../actions/api";

import { IApiState } from "../types";

export const defaultState: IApiState = {
  users: [],
  isLoading: false,
  error: null
};

const apiState = (state = defaultState, action: any): IApiState => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        isLoading: false
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        users: [],
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default {
  apiState
};
