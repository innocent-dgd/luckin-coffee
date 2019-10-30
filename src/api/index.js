import axios from "axios";
import NProgress from "nprogress";
axios.interceptors.request.use(function (config) {
    NProgress.start();
    return config;
  }, function (error) {

    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    NProgress.done();
    return response;
  }, function (error) {

    return Promise.reject(error);
  });






let baseURL=process.env.API_URL;
export const GET=(url,params)=>{
    return axios.get(`${baseURL}${url}`,{params:params}).then((data)=>{return data}).then((data)=>{ return data})
};
export const POST=(url,params)=>{
    return axios.get(`${baseURL}${url}`,params).then(data=>data)
};
