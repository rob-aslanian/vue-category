import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: new Map(),
    card: new Map(),
  },
  mutations: {
    setData(state, payload) {
      const categoriesCopy = new Map(state.data);
      for (const [key, value] of [...payload.entries()]) {
        categoriesCopy.set(key, value);
      }

      state.data = categoriesCopy;
    },
    addToCard(state, payload) {
      const cardCopy = new Map(state.card);
      cardCopy.set(payload.id, {
        ...payload,
        amount: 1,
        total_price: payload.rub_price,
      });

      state.card = cardCopy;
    },
    increaseProductInCard(state, payload) {
      const cardCopy = new Map(state.card);
      if (cardCopy.get(payload.id)) {
        let product = cardCopy.get(payload.id);
        (product.amount = payload.amount),
          (product.total_price = payload.amount * product.rub_price);

        console.log(product);
        cardCopy.set(payload.id, product);
      }

      state.card = cardCopy;
    },
    removeFromCard(state, payload) {
      const cardCopy = new Map(state.card);
      cardCopy.delete(payload);

      state.card = cardCopy;
    },
  },
  actions: {
    setData({ commit }, payload) {
      commit('setData', payload);
    },
    addToCard({ commit }, payload) {
      commit('addToCard', payload);
    },
    increaseProductInCard({ commit }, payload) {
      commit('increaseProductInCard', payload);
    },
    removeFromCard({ commit }, payload) {
      commit('removeFromCard', payload);
    },
  },
  getters: {
    getData: (state) => state.data,
    getCard: (state) => state.card,
    getCardAmount: (state) => state.card.size,
  },
});
