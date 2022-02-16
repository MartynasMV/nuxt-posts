<template>
  <div @click="toggleModal">
    <a class="button is-danger is-block is-bold">
      <span class="compose">Create</span>
    </a>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button
            @click="toggleModal"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button @click="toggleModal" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggleModal() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style></style>
