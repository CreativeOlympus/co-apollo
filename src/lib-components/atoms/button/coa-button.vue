<script lang="ts">
import { defineComponent, ref } from 'vue'

export default /*#__PURE__*/ defineComponent({
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'blue',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'normal',
    },
    size: {
      type: String,
      default: 'base',
    },
    disabled: Boolean,
    fullWidth: Boolean,
  },
  setup(props) {
    const buttonType = ref(props.type)
    const allClasses = ref({
      'coa-btn': true,
      [`coa-btn-${props.color}`]: true,
      [`coa-btn-${props.type}`]: true,
      [`coa-btn-${props.size}`]: true,
      fullWidth: props.fullWidth,
      rounded: props.rounded,
      disabled: props.disabled,
    })

    return { allClasses, buttonType }
  },
  methods: {
    handleClick(event: HTMLElement) {
      this.$emit('click', event)
    },
  },
})
</script>

<template>
  <button :class="allClasses" @click="handleClick" :disabled="disabled">
    <slot name="prepend"></slot>
    <slot />
    <slot name="append"></slot>
  </button>
</template>

<style scoped>
@import './style.css';
</style>
