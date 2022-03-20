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
    <div
      class="coa-carousel-item-wrapper"
      v-for="(item, index) in items"
      :key="index"
    >
      <slot :item="item">
        <CoaCarouselItem
          :title="item.title"
          :subtitle="item.subtitle"
          :bg-color="item.bgColor"
          :text-color="item.textColor"
          :image="item.image"
          :alt="item.alt"
          :default-image="item.defaultImage"
          :content="item.content"
        />
      </slot>
    </div>
  </div>
</template>
<style scoped>
@import './style.css';
</style>
