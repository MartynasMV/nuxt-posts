<template>
  <div>
    <!-- Navigation bar component starts here-->
    <NavBar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr />
                </div>
                <!-- Post component starts here -->
                <PostItem
                  v-for="post in posts"
                  :key="post._id"
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :date="post.createdAt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar"; /* .vue extension not needed */
import PostItem from "@/components/PostItem";
export default {
  components: {
    NavBar,
    PostItem,
  },
  data() {
    return {
      posts: [
        {
          _id: 1,
          title: "My first post",
          subtitle: "subtitle 1",
          createdAt: new Date(),
        },
        {
          _id: 2,
          title: "My second post",
          subtitle: "subtitle 2",
          createdAt: new Date(),
        },
        {
          _id: 3,
          title: "My third post",
          subtitle: "subtitle 3",
          createdAt: new Date(),
        },
      ],
    };
  },
};
</script>

<style>
.post-content {
  font-style: italic;
}
.post {
  margin-bottom: 20px;
  padding: 5px;
  border-bottom: 2px solid transparent;
}
.post:hover {
  border-bottom: 2px solid #e8e8e8;
}
</style>
