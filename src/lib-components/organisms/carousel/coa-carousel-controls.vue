<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'CoaCarouselControls',
  components: { ArrowCircleLeftIcon, ArrowCircleRightIcon },
  emits: ['previous', 'next'],
  methods: {
    previous(event: HTMLElement) {
      this.$emit('previous', event)
    },
    next(event: HTMLElement) {
      this.$emit('next', event)
    },
  },
})
</script>
<template>
  <div class="coa-carousel-controls">
    <button class="coa-carousel-control previous" @click="previous">
      <slot name="previous">
        <ArrowCircleLeftIcon />
      </slot>
    </button>
    <button class="coa-carousel-control next" @click="next">
      <slot name="next">
        <ArrowCircleRightIcon />
      </slot>
    </button>
  </div>
</template>
<style scoped>
@import './style.css';
</style>
