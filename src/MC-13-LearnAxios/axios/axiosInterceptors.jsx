import axios from 'axios';
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

//Manipulate the Request Headers:

//request.use takes two callbacks as paramenters;
api.interceptors.request.use(
  (config) => {
    //Now for every request the token willl get added;
    config.headers.Authorization = 'Bearer osndasdkpasjdoandzmsnal';
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
)

export default api;