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
      title: 'Testing Title !',
      subtitle: 'Testing Subtitle',
      bgColor: 'green',
    }
    const slide2: SlideContent = {
      title: ' Testing Title 2 !',
      subtitle: 'Testing subtitle 2 ',
      bgColor: 'yellow',
      textColor: 'black',
    }
    const slides: SlideContent[] = [slide, slide2, slide, slide2]

    return { slides }
  },
})
</script>

<template>
  <div id="app">
    <CoaCarousel :items="slides" />
  </div>
</template>
