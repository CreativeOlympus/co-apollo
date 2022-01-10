<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'coa-list-item',
  props: {
    tag: {
      type: String || null,
    },
    title: {
      type: String || null,
    },
    description: {
      type: String || null,
    },
    icon: {
      type: String || null,
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

    console.log('testing ->>>', props.tag)

    return {
      classList,
      ...props,
    }
  },
})
</script>
<template>
  <component :is="tag" :class="classList"> Testing </component>
</template>
