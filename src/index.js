import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig);
    // We can edi the request config here.
    return requestConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(responseConfig => {
    console.log(responseConfig);
    // We can edi the request config here.
    return responseConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content'] = 'application/json';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
