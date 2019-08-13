import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://burger-builder-10fa3.firebaseio.com/',
})

export default axiosInstance;