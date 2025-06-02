import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(user) {
      this.userInfo = user;
      this.isAuthenticated = true;
    },
    clearUser() {
      this.userInfo = null;
      this.isAuthenticated = false;
    },
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
    isLoggedIn: (state) => state.isAuthenticated,
  },
});