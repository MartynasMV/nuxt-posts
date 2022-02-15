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
function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {}, 1000); // setTimout will be executed after 1000ms = aka after 1s
  });
}
export const state = () => {
  return {
    posts: [],
  };
};