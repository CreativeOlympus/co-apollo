<script lang="ts">
import { defineComponent } from 'vue'

export default /*#__PURE__*/ defineComponent({
  name: 'Button',
  methods: {
    handleClick() {
      console.log('clicked')
    },
  },
})
</script>

<template>
  <button class="btn btn-blue" @click="handleClick">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
