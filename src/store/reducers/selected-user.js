import * as types from '../types';

export const initialState = {
  data: {},
  loading: false, // loading users ids
  error: undefined, // If error rises due the loading data the string message will be stored in this property.
};

export function sliceArray(array, index) {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
}

export const selectedUsers = (state = initialState, action) => {
  // TODO: Perhaps in the future we'd like to concat data results, but for now it overrides by each update.
  // And display spinner for the each user separately.
  switch (action.type) {
    case types.USER_REQUEST_LOADING: {
      return {
        ...state,
        error: undefined,
        loading: true,
      }
    }

    case types.USER_REQUEST_FAIL: {
      return {
        data: {},
        loading: false,
        error: action.payload,
      }
    }

    case types.USER_REQUEST_SUCCESS: {
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