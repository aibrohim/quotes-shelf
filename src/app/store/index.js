import { createStore } from "vuex";

import { axiosInstance } from "@/shared/config/api";

export const store = createStore({
  state: {
    quotes: null,
    quotesCount: 0,
    loading: false,
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    getQuotes({ commit, state }, params = {}) {
      commit("setLoading", true);
      return axiosInstance
        .get("", {
          params,
        })
        .then((data) => {
          state.quotes = data.data;
          commit("setLoading", false);
          return data.data;
        });
    },
    deleteQuotes({ state }, quoteId) {
      return axiosInstance.delete("" + quoteId).then((data) => {
        state.quotes = state.quotes.filter((quote) => quote.id !== quoteId);
        return data.data;
      });
    },
  },
});
