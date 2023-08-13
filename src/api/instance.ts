import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  timeout: 2000,
  headers: { 'x-api-key': 'live_ZtYpLpv3d7DTAE0CnrMqPJqAqPpNLHn5zUJpWmtZ3mNjmEvivWvCJYw5jT6oazsA' },
});

export default instance;
