<script lang="ts">
import { defineComponent } from 'vue'
import { CoaButton } from '@/lib-components'

export default defineComponent({
  name: 'CoaCarouselItem',
  components: { CoaButton },
  props: {
    title: {
      type: String,
      default: 'Sample Title',
    },
    subtitle: {
      type: String,
      default: 'Sample Subtitle',
    },
    bgColor: {
      type: String,
      default: 'blue',
    },
    textColor: {
      type: String,
      default: 'white',
    },
    image: {
      type: String,
      default: 'https://picsum.photos/200/300',
    },
    alt: {
      type: String,
      default: 'Image name',
    },
    content: {
      type: String,
      default: 'Large Text',
    },
  },
  setup(props) {
    const allClasses = [
      'coa-carousel-item',
      `bg-${props.bgColor}-500`,
      `text-${props.textColor}`,
    ]

    return { allClasses }
  },
})
</script>
<template>
  <figure :class="allClasses">
    <figcaption>
      <h2 class="text-4xl">{{ title }}</h2>
      <p class="text-2xl">{{ subtitle }}</p>

      <img :src="image" :alt="alt" />

      <div>
        {{ content }}
      </div>

      <CoaButton color="success"> Action Here </CoaButton>
    </figcaption>
  </figure>
</template>
