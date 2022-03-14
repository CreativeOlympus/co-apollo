<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SlideContent } from './types'
import CoaCarouselItem from '@/lib-components/organisms/carousel/coa-carousel-item.vue'

export default defineComponent({
  name: 'CoaCarousel',
  components: { CoaCarouselItem },
  props: {
    slides: Array as PropType<Array<SlideContent>>,
  },
})
</script>
<template>
  <div class="coa-carousel">
    <CoaCarouselItem></CoaCarouselItem>
  </div>
</template>
<style scoped>
@import './style.css';
</style>
