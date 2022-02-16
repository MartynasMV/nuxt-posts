const INITIAL_DATA = {
  posts: [
    {
      _id: 1,
      title: "My first post",
      subtitle: "subtitle 1",
      createdAt: new Date(),
      isRead: false,
    },
    {
      _id: 2,
      title: "My second post",
      subtitle: "subtitle 2",
      createdAt: new Date(),
      isRead: false,
    },
    {
      _id: 3,
      title: "My third post",
      subtitle: "subtitle 3",
      createdAt: new Date(),
      isRead: false,
    },
  ],
};

//simulating req to a server
function fetchPostsAPI() {
  debugger;
  return new Promise((resolve, reject) => {
    debugger;
    setTimeout(() => {
      resolve(INITIAL_DATA.posts);
    }, 1000);
  });
}
export const state = () => {
  return {
    posts: [],
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
    state.posts = posts;
  },
};
