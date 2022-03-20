<script lang="ts">
import { defineComponent } from 'vue'
import { CoaCarousel } from '@/entry.esm'
import { SlideContent } from '@/lib-components/organisms/carousel/types'

export default defineComponent({
  name: 'ServeDev',
  components: {
    CoaCarousel,
  },
  setup() {
    const slide: SlideContent = {
      title: 'Testing Title',
      subtitle: 'Testing Subtitle',
    }
    const slides: SlideContent[] = [slide, slide]

    return { slides }
  },
})
</script>

<template>
  <div id="app">
    <CoaCarousel :items="slides" />
  </div>
</template>
