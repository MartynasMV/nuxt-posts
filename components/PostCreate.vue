<template>
  <Modal @modalSubmitted="createPost">
    <template #actionButton>
      <a class="button is-danger is-block is-bold">
        <span class="compose">Create</span>
      </a></template
    >
    <!-- DEFAULT content for modal, will be received in Modal component as <slot>  -->
    <form class="post-form">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model="form.title"
            class="input"
            type="text"
            placeholder="Awesome Title"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Subtitle</label>
        <div class="control">
          <input
            v-model="form.subtitle"
            class="input"
            type="text"
            placeholder="Awesome subtitle"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea
            v-model="form.content"
            class="textarea"
            placeholder="Awesome Content"
          ></textarea>
        </div>
      </div>
      <div class="markdown">
        <label class="label">Content Preview</label>
        <div v-html="compiledMarkdown()"></div>
      </div>
    </form>
  </Modal>
</template>
<script>
import Modal from "@/components/shared/Modal";
export default {
  components: { Modal },
  data() {
    return {
      form: {
        title: "",
        subtitle: "",
        content: "",
      },
    };
  },

  methods: {
    createPost({ closeModal, data }) {
      //dispatch action with our form data
      //console.log(this.form);
      this.$store.dispatch("post/createPost", { ...this.form });
      closeModal(); //to hide the modal after closing
      console.log(data);
      this.resetForm();
    },
    resetForm() {
      this.form.title = "";
      this.form.subtitle = "";
      this.form.content = "";
    },
    compiledMarkdown() {
      if (process.client) {
        return marked(this.form.content, { sanitize: true });
      }
      return "";
    },
  },
};
</script>
