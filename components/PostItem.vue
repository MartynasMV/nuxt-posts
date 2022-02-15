<template>
  <div class="post">
    <a class="post-header post-header-link clickable">
      <h4 class="title is-4">{{ title }}</h4>
      <h5 class="subtitle is-5">{{ subtitle }}</h5>
    </a>
    <div class="post-content">{{ date }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: false,
      //default:
    },
  },
};
</script>
