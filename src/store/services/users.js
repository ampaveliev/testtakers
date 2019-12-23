import axios from 'axios';

/**
 * Requset all users data
 *
 * @param {Object} params - the request params.
 *
 * @returns {Promise}
 */
export const loadUsers = (params) => {
  // here we can use parsers, like json parser, text parser, csv or smthing else. And returns data, which follows one scheme.
  return axios.get('/users', { params });
}

/**
 * Request concrete user data.
 *
 * @param {Number} userId
 *
 * @returns {Promise}
 */
export const loadUser = (userId) => {
  return axios.get(`/user/${userId}`);
}
