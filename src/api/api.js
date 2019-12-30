import axios from 'axios';
import qs from 'qs';
import {baseUrl} from './env.js';


// axios.defaults.baseURL = baseUrl;
axios.defaults.dataType = 'json';

// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     return config;
//   },
//   err => {
//       return Promise.reject(err);
// });

// http response 拦截器
axios.interceptors.response.use(
  res => {
    // 数据响应之后，要做的业务
    if (res.data.code == 'AUTH_FAIL') {   //没有登录，去登录
      localStorage.clear();
      // alert('登录失效，请重新登录');
      
    } else if (res.data.code == "SYSTEM_ERROR") {
      alert(res.data.message);
    } else {
      return res;
    }
  },
  error => {
    return error;
  }
)

// 为部分请求添加token-- 从缓存里面取   不是全部适用，凡是登录成功跳转的第一页面，需要调用方法getAppUserInfo();
  // 请求参数格式：formData
function paramsAddToken(params) {
  params.boxinAuthToken = localStorage.getItem("token");
  // alert(JSON.stringify(params));
  params = qs.stringify(params);
  return params;

}
  // 请求参数格式：json
function paramsAddTokenJson(params) {
  params.boxinAuthToken = localStorage.getItem('token');
  return params;
};


//首页请求
export const getHomeInfo = params => { return axios.post(baseUrl + `/index`, qs.stringify(params)) };