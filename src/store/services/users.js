import axios from 'axios';

const baseURL = 'https://hr.oat.taocloud.org';
const apiVersion = 'v1';
axios.defaults.baseURL = `${baseURL}/${apiVersion}`;

/**
 * Requset all users data
 *
 * @param {Object} params
 *  - offset {Number}
 *  - limit {Number}
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
