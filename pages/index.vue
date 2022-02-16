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
                <PostItem
                  v-for="post in posts"
                  :key="post._id"
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :date="post.createdAt"
                  :isRead="post.isRead"
                />
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
  //mounted() is called when component is mounted in a DOM
  mounted() {
    debugger;
    this.$store.dispatch("fetchPosts");
  },
  computed: {
    posts() {
      debugger;
      return this.$store.state.posts;
    },
    /*     isFormValid() {
      console.log("isFormvalid called");
      if (this.form.title) {
        return true;
      }
      return false;
    }, */
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
