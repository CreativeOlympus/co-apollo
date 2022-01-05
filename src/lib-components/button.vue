<script lang="ts">
  import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: "Button",
  methods: {
    handleClick() {
      console.log('clicked')
    }
  }
})

  </script>

<template><button @click="handleClick"> Click Here </button></template>
