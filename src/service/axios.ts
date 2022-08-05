import axios from 'axios'
import { ElMessage } from 'element-plus'
import getContext from '../assets/utils/context'
import messages from '../assets/consts/messages'

const config: any = {
  timeout: 360000, // 6分钟
  withCredentials: false, // 表示跨域请求时是否需要使用凭证(cookie/session)，默认false
  baseURL: (<any>window).PAGECONF.hostApi,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  responseType: 'json' // 返回数据类型
}

const $axios = axios.create(config)

// 请求拦截器
$axios.interceptors.request.use((request) => {
  // console.log(request)
  let data = request.data || {}
  let context = getContext()

  if (data.method) {
    context.method = data.method
    delete data.method
  } else {
    const temp = request.url?.split('/')
    context.method = temp && temp[temp.length - 1]
  }
  
  data.responseType && (request.responseType = data.responseType) && (delete data.responseType)

  if (request.url?.toLowerCase().includes('http')) { request.baseURL = '' }

  if (context.method === 'itSysLogin' || context.method === 'logout') {
    if (context.method === 'itSysLogin') {
      delete context.token
      delete context.accountID
    }
    context.bizSystemId = "55086f58-666f-400b-aef4-71933817830b"
    request.data = { context, data }
    return request
  } else {
    if (context.token && context.token !== 'undefined' && context.accountID && context.accountID !== 'undefined') {
      request.data = { context, data }
      return request
    } else {
      ElMessage.error({message: 'token失效，请重新登录！', duration: 2, onClose: () => window.location.href = `${PAGECONF.hostLogin}login?appKey=${PAGECONF.appKey}&callbackUrl=${location.origin}`})
    }
  }
}, function (error) {
  return Promise.reject(error);
})

// 响应拦截器
$axios.interceptors.response.use(function (response) {
  if (response.config.responseType === 'blob') {
    return response.data
  }
  if (response.data.code !== 0) {
    const code:string = (response.data.code % 1000) + ''
    if (code === '-11001') { // the token has expired
      localStorage.removeItem('vs-xxx-token')
      localStorage.removeItem('vs-xxx-uid')
      ElMessage.error({message: messages[code], duration: 2, onClose: () => window.location.href = `${PAGECONF.hostLogin}login?appKey=${PAGECONF.appKey}&callbackUrl=${location.origin}`})
    }

    ElMessage.error(response.data.msg)
    return Promise.reject(response.data.msg)
  }

  return response.data
}, function (error) {
  ElMessage.error(error.toString())
  return Promise.reject(error)
})

export { $axios }
