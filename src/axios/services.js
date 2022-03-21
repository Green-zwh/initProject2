import axios from './axios';
import url from './index';

const server = {
    getdata() { 
        return axios(url+'/data', {
            method: 'get'
        })
    },
};

export default server;
