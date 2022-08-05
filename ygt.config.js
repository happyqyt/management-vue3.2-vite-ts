module.exports = {
  // 账号
  account: 'elinqiu@vesync.com.cn',
  // 密码
  password: 'm0t61w31rh',
  // Yapi网址链接
  originUrl: 'https://yapi.vesync.com/',
  // 请求声明模块
  fetchModule: 'import { AxiosPromise as RequestPromise , AxiosRequestConfig as RequestConfig } from "axios";',
  // 输出目录
  outDir: './src/apis',
  // 项目跟请求方法映射
  projectMapping: {
    230: {
      exportName: '$axios',
      // 返回报文泛式
      wrapper: '{ code: number, message: string, data: T }'
    }
  },
  // 请求体实例文件路径
  requestFilePath: '../../service/axios',
  // 忽略ts校验
  tsIgnore: true,
  // 忽略eslint
  esLintIgnore: true
};
