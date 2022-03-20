<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { SlideContent } from './types'
import CoaCarouselItem from '@/lib-components/organisms/carousel/coa-carousel-item.vue'
import CoaCarouselControls from '@/lib-components/organisms/carousel/coa-carousel-controls.vue'

export default defineComponent({
  name: 'CoaCarousel',
  components: { CoaCarouselItem, CoaCarouselControls },
  props: {
    items: Array as PropType<Array<SlideContent>>,
  },
  setup(props) {
    const currentSlide = ref(0)
    const slides = ref(props.items || [])
    return { currentSlide, slides }
  },
  computed: {
    carouselItemCustomStyle() {
      console.log(document.querySelectorAll('.coa-carousel-item-wrapper'))
      return `transform: translate(${-435 * this.currentSlide}px)`
    },
  },
  methods: {
    previous() {
      this.currentSlide--
      if (this.currentSlide < 0) this.currentSlide = 0
    },
    next() {
      this.currentSlide++
      if (this.currentSlide > this.slides.length - 1)
        this.currentSlide = this.slides.length - 1
    },
  },
})
</script>
<template>
  <div class="coa-carousel">
    <coa-carousel-controls @previous="previous" @next="next" />
    <div class="coa-carousel-content">
      <div
        class="coa-carousel-item-wrapper"
        :style="carouselItemCustomStyle"
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
  </div>
</template>
<style scoped>
@import './style.css';
</style>
