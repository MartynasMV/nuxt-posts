<template>
  <div>
    <div @click="isActive = true">
      <slot name="actionButton"> </slot>
    </div>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button
            @click="isActive = false"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot">
          <button @click="emitModalSubmit" class="button is-success">
            Save changes
          </button>
          <button @click="isActive = false" class="button">Cancel</button>
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
    //emitting emitModalSubmit to parent (Modal to PostCreate)
    emitModalSubmit() {
      this.$emit("modalSubmitted", {
        closeModal: this.closeModal,
        data: "random data",
      }); // originally second parameter was this.closeModal. Its a payload. adding second parameter in squares I can send multiple things in one payload
    },
    closeModal() {
      this.isActive = false;
    },
  },
};
</script>

<style></style>
