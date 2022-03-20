<script lang="ts">
import { defineComponent } from 'vue'
import DefaultImage from '@/lib-components/atoms/placeholders/coa-default-image.vue'

export default defineComponent({
  name: 'CoaCarouselItem',
  components: { DefaultImage },
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
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
    },
    alt: {
      type: String,
      default: 'Default picture',
    },
    defaultImage: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
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
      <div class="coa-carousel-item-header">
        <slot name="header" :item="{ image, alt }">
          <img v-if="image" :src="image" :alt="alt" />
          <default-image v-if="!image && defaultImage" icon-type="outline" />
        </slot>
      </div>
      <div class="coa-carousel-item-content">
        <slot :item="{ title, subtitle, content, image }">
          <h2 class="text-4xl">{{ title }}</h2>
          <p class="text-2xl">{{ subtitle }}</p>
          {{ content }}
        </slot>
      </div>

      <div class="coa-carousel-item-footer flex flow-row gap-4">
        <slot name="footer"></slot>
      </div>
    </figcaption>
  </figure>
</template>
<style>
@import './style.css';
</style>
