import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarOpen: false
  },
  getters: {
    sidebarOpen: (state) => state.sidebarOpen,
  },
  mutations: {
    setSidebarOpen(state, value) {
      state.sidebarOpen = value;
  },
  },
  actions: {
  },
  modules: {
  }
})
