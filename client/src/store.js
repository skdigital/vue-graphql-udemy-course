import Vue from "vue";
import Vuex from "vuex";

import { gql } from "apollo-boost";
import { defaultClient as apolloClient } from "./main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    getPosts: ({ commit }) => {
      commit("setLoading", true);
      // use ApolloClient to fire getPosts query
      apolloClient
        .query({
          query: gql`
            query {
              getPosts {
                title
                imageUrl
                description
                likes
              }
            }
          `
        })
        .then(({ data }) => {
          // Get data from actions to state via mutation
          // Commit allows data from an action to a mutation function
          commit("setPosts", data.getPosts);
          commit("setLoading", false);
          console.log(data.getPosts);
        })
        .catch(err => {
          commit("setLoading", false);
          console.log(err);
        });
    }
  },
  getters: {
    posts: state => state.posts,
    loading: state => state.loading
  }
});
