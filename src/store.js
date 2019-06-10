import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://api.tvmaze.com/'

export const store = new Vuex.Store({
  state: {
    shows: [],
    showNotificationError: false,
    notificationErrorMessage: '',
  },
  mutations: {
    updateShows(state, shows) {
      state.shows = shows
    },
    updateShowNotificationError(state, showNotificationError) {
      state.showNotificationError = showNotificationError
    },
    updateNotificationErrorMessage(state, message) {
      state.notificationErrorMessage = message
    },
  },
  actions: {
    getFilteredShows(context, data) {
      return axios
        .get(`search/shows?q=${data}`)
        .then(response => {
          context.commit('updateShows', response.data)
          return response
        })
        .catch(error => {
          console.log({ error })
        })
    },
  },
})
