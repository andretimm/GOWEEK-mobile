import axios from 'axios';

//10.0.2.2:3000 - emulador android sdk
//10.0.3.2:3000 - emulador gynemotion
const api = axios.create({
    baseURL: 'http://10.0.3.2:3000'
});

export default api;