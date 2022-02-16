import { INITIAL_DATA } from "./index";
//simulating req to a server
function fetchPostsAPI() {
  debugger;
  return new Promise((resolve, reject) => {
    debugger;
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
//actions is a good spot to send a request to a server. Usually Actions resolve into some data.
export const actions = {
  fetchPosts(context) {
    //previously it was fetchPosts(context) it was replaced with fetchPosts({ commit})
    //with context we are accessing a lot of data like in this example - commit()
    return fetchPostsAPI().then((posts) => {
      context.commit("setPosts", posts);
    });
  },
};
//Mutations are simple functions which have access to a state.
//Mutations are used to assign values to a state.
export const mutations = {
  setPosts(state, posts) {
    state.items = posts;
  },
};
