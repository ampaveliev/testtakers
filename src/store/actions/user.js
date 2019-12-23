import { ALL_USERS_REQUEST_LOADING, ALL_USERS_REQUEST_SUCCESS } from '../types';

/**
 * Action creator for start loading users.
 * 
 * @param {Object} config 
 *  - limit {Number} - the amount of the requested users,
 *  - offset {Number} - the offset of reqeusted users.
 *
 * @returns {Object} - standard redux action
 *   - type {String} - ALL_USERS_REQUEST_LOADING,
 *   - payload {Object} - passed config.
 */
export const loadUsersRequest = (config = { limit: 20, offset: 0 }) => ({
  type: ALL_USERS_REQUEST_LOADING,
  payload: config,
});

/**
 * Action creator for handle success loading users.
 * 
 * @param {Array} users
 *
 * @returns {Object} - standard redux action
 *   - type {String} - ALL_USERS_REQUEST_SUCCESS,
 *   - payload {Array} - passed users.
 */
export const loadUsersSuccess = (users) => ({
  type: ALL_USERS_REQUEST_SUCCESS,
  payload: users,
})

