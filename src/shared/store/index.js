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
    getQuotes({ state }, params = {}) {
      state.loading = true;
      return axiosInstance
        .get("", {
          params: {
            _sort: "createdAt",
            _order: "desc",
            ...params,
          },
        })
        .then((data) => {
          state.quotes = data.data;
          state.loading = false;
          return data.data;
        });
    },
    addQuote({ state }, values) {
      return axiosInstance
        .post("", {
          createdAt: new Date().toISOString(),
          ...values,
        })
        .then((data) => {
          state.quotes = state.quotes ? [data.data, ...state.quotes] : null;
          return data.data;
        });
    },
    editQuote({ state }, values) {
      return axiosInstance
        .patch("" + values.id, {
          modifiedAt: new Date().toISOString(),
          ...values,
        })
        .then((data) => {
          if (state.quotes) {
            const changedItemIndex = state.quotes.findIndex(
              (quote) => quote.id === values.id
            );
            state.quotes = [
              ...state.quotes.slice(0, changedItemIndex),
              data.data,
              ...state.quotes.slice(changedItemIndex + 1),
            ];
          }
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
