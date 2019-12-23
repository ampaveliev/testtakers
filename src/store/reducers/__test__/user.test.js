import { users, initialState } from '../user';
import { ALL_USERS_REQUEST_LOADING, ALL_USERS_REQUEST_FAIL, ALL_USERS_REQUEST_SUCCESS } from '../../types';

describe('User reducer', () => {
  test('should return initialState', () => {
    const result = users(undefined, {});

    expect(result).toBe(initialState);
  });

  test('should return passed state', () => {
    const state = { data: [1], loading: false, error: undefined };
    const result = users(state, { });

    expect(result).toEqual(state);
  });

  test('should handle loading action', () => {
    const state = { data: [1], loading: false, error: undefined };
    const action = { type: ALL_USERS_REQUEST_LOADING };
    const result = users(state, action);

    const expected = { data: [1], loading: true, error: undefined };
    expect(result).toEqual(expected);
  });

  test('should handle error action', () => {
    const state = { data: [1], loading: true, error: undefined };
    const action = { type: ALL_USERS_REQUEST_FAIL, payload: 'Error message' };
    const result = users(state, action);

    const expected = { data: [1], loading: false, error: action.payload };
    expect(result).toEqual(expected);
  });

  test('should handle success action', () => {
    const state = { data: [1], loading: true, error: undefined };
    const action = { type: ALL_USERS_REQUEST_SUCCESS, payload: [1, 2] };
    const result = users(state, action);

    const expected = { data: action.payload, loading: false, error: undefined };
    expect(result).toEqual(expected);
  });
});
