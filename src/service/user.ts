import { postItSysLogin, postLogout } from '../apis/cloudBUserService'
import { ElLoading } from 'element-plus'
import store from '../store'

const baseURL = `${PAGECONF.hostApi}/cloud/v1/buser/`

export function login (ticket: string, cb: Function) {
  postItSysLogin({ticket}, {baseURL}).then((res: any) => {
    // console.log('postItSysLogin', res)
    if (res.code === 0) {
      localStorage.setItem('vs-xxx-token', res.result?.token)
      localStorage.setItem('vs-xxx-uid', res.result?.accountId)
      store.commit('setUserInfo', res.result)
      cb()
    }
  }).catch((_error: any) => {
    // ElMessage.error(error.toString())
  })
}

export function logout () {
  const loading = ElLoading.service({
    lock: true,
    text: '退出登录...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  postLogout({}, {baseURL}).then((_res) => {
    // console.log('postLogout', res)
    localStorage.removeItem('vs-xxx-token')
    localStorage.removeItem('vs-xxx-uid')
    window.location.href = `${PAGECONF.hostLogin}login?appKey=${PAGECONF.appKey}&callbackUrl=${location.origin}`
  }).catch((_error: any) => {
    // ElMessage.error(error.toString())
  }).finally(() => {
    loading.close()
  })
}
