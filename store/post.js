import { INITIAL_DATA } from "./index";
import Vue from "vue";

//simulating req to a server
export function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts);
    }, 200);
  });
}
export const state = () => {
  return {
    items: [],
  };
};
//getters are like computed properties but for Vuex
export const getters = {
  hasEmptyItems(state) {
    return state.items.length === 0;
  },
};
//actions is a good spot to send a request to a server. Usually Actions resolve into some data.
export const actions = {
  fetchPosts(context) {
    //previously it was fetchPosts(context) it was replaced with fetchPosts({ commit})
    //with context we are accessing a lot of data like in this example - commit()
    return fetchPostsAPI().then((posts) => {
      context.commit("setPosts", posts);
    });
  },
  createPost({ commit }, postData) {
    //create post on a server or persist data in some way
    postData._id = Math.random().toString(36).substring(2, 9); //creating new IDs since newly created posts dont have it
    postData.createdAt = new Date(); //creating data for new posts
    commit("addPost", postData);
  },
  updatePost({ commit, state }, postData) {
    const index = state.items.findIndex((post) => {
      return post._id === postData._id;
    });
    commit("replacePost", { post: postData, index });
  },
};
//Mutations are simple functions which have access to a state.
//Mutations are used to assign values to a state.
export const mutations = {
  setPosts(state, posts) {
    state.items = posts;
  },
  addPost(state, post) {
    state.items.push(post);
  },
  replacePost(state, { post, index }) {
    Vue.set(state.items, index, post);
  },
};
