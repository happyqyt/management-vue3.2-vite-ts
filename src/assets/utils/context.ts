/*
 * 请求体中，公共字段context
 */
import { padStart } from 'lodash'

// 生成traceId
function genTraceId () {
  return 'WEB0000' + Date.now() + '-' + getTidnumStr()
}
let getTidnumStr = (function () {
  let tidnum = -1
  return function () {
    if (tidnum > 65535) {
      tidnum = -1
    }
    tidnum++
    return padStart(tidnum + '', 5, '0')
  }
})()
// alert(process)
/**
  * 请求体的context字段的部分公共信息（比较固定，不会常变化的部分字段）
  */
interface Context {
  traceId: string
  debugMode: boolean
  reqTimestamp: number
  token?: string | null
  accountID?: string | null
  timeZone: string
  acceptLanguage: string
  appVersion: string
  osInfo: string
  phoneOS: string
  phoneBrand: string
  clientType: string
  clientInfo: string
  clientVersion: string
  terminalId: string
  method: string | undefined
  bizSystemId: string | undefined
}
export default function getContext (): Context {
  return {
    traceId: genTraceId(),
    debugMode: false,  // process.env.NODE_ENV !== 'production'
    reqTimestamp: Date.now(),
    token: localStorage.getItem('vs-xxx-token'),
    accountID: localStorage.getItem('vs-xxx-uid'),
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    acceptLanguage: navigator.language,
    appVersion: navigator.appVersion,
    osInfo: navigator.platform,
    phoneOS: navigator.platform,
    phoneBrand: navigator.vendor,
    clientType: 'pc',
    clientInfo: navigator.userAgent,
    clientVersion: navigator.appVersion,
    terminalId: 'vesync-xxx',
    method: '',
    bizSystemId: undefined
  }
}
