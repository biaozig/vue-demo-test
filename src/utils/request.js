import axios from 'axios'
import cookie from 'vue-cookies';
import moment from 'moment'
import md5 from 'js-md5'

const baseURL = '';

// 创建axios 实例
const axiosInstance = axios.create({
  baseURL,
  retry: 1,
  timeout: 6000,
  retryDelay: 1000,
  type: "json",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

// 状态码
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 异常处理
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  let errortext = codeMessage[response.status] || response.statusText;
  message.destroy();
  message.warning(`请求错误 ${response.status}: ${response.url},${errortext}`);

  let error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

/** 
 * 封装请求
 * 
 * @options 
 *  method: 请求接口  'POST' | 'post' | 'GET' | 'get'
 *  data: 需要发送的数据
 *  noToken: 是否需要携带token 默认false 携带token
 *  noToast: 异常报错时是否需要弹窗提示 默认
 *  noLoading: 是否显示加载loading 默认true 不执行
 * 
 * */ 

// post
const post = function(options){
  let api = `${baseUrl}${options.method}`;
  
  return new Promise((resolve, reject) => {
    axiosInstance.post(api, options.data)
    .then(checkStatus)
    .then(async(response) => {
      let { code, data } = response.data;

      if(code === '0' || code === 0){
        return resolve(data)
      }

      // 处理异常


      

    })
  })
}

// get
const get = function(options){
  axiosInstance.get(api, {
      params: options.data
    })
    .then(checkStatus)
    .then(async(response) => {
      let { code, data } = response.data;

      if(code === '0' || code === 0){
        return resolve(data)
      }

      // 处理异常


      

    })

}


// 到处request
export default { get, post } 