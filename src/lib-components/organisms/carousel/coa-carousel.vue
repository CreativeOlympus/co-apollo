<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SlideContent } from './types'
import CoaCarouselItem from '@/lib-components/organisms/carousel/coa-carousel-item.vue'

export default defineComponent({
  name: 'CoaCarousel',
  components: { CoaCarouselItem },
  props: {
    items: Array as PropType<Array<SlideContent>>,
  },
})
</script>
<template>
  <div class="coa-carousel">
    <CoaCarouselItem v-for="(item, index) in items" :key="index">
      <slot :item="item"> </slot>
    </CoaCarouselItem>
  </div>
</template>
<style scoped>
@import './style.css';
</style>
