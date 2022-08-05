import { createStore } from 'vuex'

// 在调用createStore是传入一个自己root的type
const store = createStore({
  state: () => ({
    menuCollapse: false,
    userInfo: JSON.parse(localStorage.getItem('vs-xxx-user') || '{}')
  }),
  getters: {
    menuCollapse (state) {
      return state.menuCollapse
    },
    userInfo (state) {
      return state.userInfo
    }
  },
  mutations: {
    setMenuCollapse (state, newVal) {
      state.menuCollapse = newVal
    },
    setUserInfo (state, newVal) {
      state.userInfo = newVal
      localStorage.setItem('vs-xxx-user', newVal)
    }
  }
})

export default store
