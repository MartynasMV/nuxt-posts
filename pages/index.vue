<template>
  <div>
    <!-- Navigation bar component here-->
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
                <!-- Post component here -->
                <div v-if="posts && posts.length > 0">
                  <PostItem
                    v-for="post in posts"
                    :key="post._id"
                    :title="post.title"
                    :subtitle="post.subtitle"
                    :date="post.createdAt"
                    :isRead="post.isRead"
                  />
                </div>
                <div v-else>There are no posts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <form>
        {{ isFormValid() }}
        <input type="text" v-model="form.title" />
        <input type="text" v-model="form.subtitle" />
      </form> -->
    </div>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar"; /* .vue extension not needed */
import PostItem from "@/components/PostItem";
import { fetchPostsAPI } from "~/store/post";

export default {
  components: {
    NavBar,
    PostItem,
  },
  data() {
    return {
      form: {
        title: "some title",
        subtitle: "some subtitle",
      },
    };
  },

  mounted() {
    this.$store.dispatch("post/fetchPosts"); //because I moved fetchPosts() from store/index.js to store/post.js
  },
  /* there are 2 ways getting data with asyncData() and fetch(context), both of it below (commenting out asyncData(), laving fetch(context) as an active one)
  async asyncData() {
    const posts = await fetchPostsAPI();
    return { posts };
  }, */
  fetch({ store }) {
    if (store.getters["post/hasEmptyItems"]) {
      //used to be if (store.state.post.items.length === 0) {
      return store.dispatch("post/fetchPosts");
    }
  },
  computed: {
    posts() {
      return this.$store.state.post.items; //posts.posts because I moved posts[] from store/index.js to store/post.js
    },
  },
  methods: {
    isFormValid() {
      console.log("is for valid called");
      if (this.form.title) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style></style>
