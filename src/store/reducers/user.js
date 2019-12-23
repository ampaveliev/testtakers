import * as types from '../types';

export const initialState = {
  data: [],
  loading: false,
  error: undefined, // If error rises due the loading data the string message will be stored in this property.
};

export const users = (state = initialState, action) => {
  // TODO: Perhaps in the future we'd like to concat data results, but for now it overrides by each update.
  switch (action.type) {
    case types.ALL_USERS_REQUEST_LOADING: {
      return {
        ...state,
        error: undefined,
        loading: true,
      }
    }

    case types.ALL_USERS_REQUEST_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }

    case types.ALL_USERS_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    }

    default: {
      return state;
    }
  }
}

export const selectedUser = (state = initialState, action) => {
  return state;
}
