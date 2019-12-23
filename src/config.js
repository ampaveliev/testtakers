import axios from 'axios';

const baseURL = 'https://hr.oat.taocloud.org';
const apiVersion = 'v1';
axios.defaults.baseURL = `${baseURL}/${apiVersion}`;
