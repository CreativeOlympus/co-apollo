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
.coa-carousel-control {
    @apply absolute w-16 sm:w-24 h-full flex flex-col content-center justify-center z-20 transition-transform
}

.coa-carousel-control.previous {
    @apply left-0 top-0
}

.coa-carousel-control.next {
    @apply right-0 top-0
}

.coa-carousel-control svg {
    @apply transition-all opacity-10
}

.coa-carousel-control:hover svg{
    @apply opacity-100
}

.coa-carousel-control:active svg {
    @apply transform scale-50
}
</style>
