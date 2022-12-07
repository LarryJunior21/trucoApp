import axios from 'axios';

var api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
