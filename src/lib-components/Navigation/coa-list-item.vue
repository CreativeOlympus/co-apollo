<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'coa-list-item',
  props: {
    tag: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    hoverClass: {
      type: String,
      default: 'coa-hover-class',
    },
    activeClass: {
      type: String,
      default: 'coa-active-class',
    },
    disableClass: {
      type: String,
      default: 'coa-disable-class',
    },
  },
  setup(props) {
    const classList = {
      [props.activeClass]: props.active,
      [props.disableClass]: props.disable,
      [props.hoverClass]: true,
    }

    return {
      classList,
    }
  },
})
</script>
<template>
  <component :is="tag" :class="classList">
    <template v-if="title || description">
      <span v-if="!!title">{{ title }}</span>
      <span v-if="!!description">{{ description }}</span>
    </template>
  </component>
</template>
