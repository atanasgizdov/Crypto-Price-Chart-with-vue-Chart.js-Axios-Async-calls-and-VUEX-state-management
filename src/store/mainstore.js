import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favorite_coins: []
    },

    mutations: {
        setFavoriteCoins(state, payload) {
          state.favorite_coins = payload;
        },
        addCoin(state, payload) {
          state.favorite_coins.push(payload)
        },
        removeCoin(state, payload){
          state.favorite_coins.splice(payload,1);
        }
      }
})

//for unit testing purposes
export const mutations = {
  increment: state => state.count++,
  addCoin: state => state.favorite_coins.push('etherium', 'bitcoin')
}
