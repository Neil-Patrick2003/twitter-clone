import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://10.0.2.2:8000/api/',
});

export default instance;