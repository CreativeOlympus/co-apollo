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
.coa-btn {
    @apply uppercase flex flex-initial rounded-md text-base gap-2 content-center justify-start self-center;
    transition: 0.2s;
}

.coa-btn.fullWidth {
    @apply w-full justify-center;
}

.coa-btn-base {
    @apply py-3 px-3;
    font-size: theme('fontSize.base');
}

.coa-btn-xs {
    @apply py-2 px-2;
    font-size: theme('fontSize.xs');
}

.coa-btn-sm {
    @apply py-2 px-2;
    font-size: theme('fontSize.sm');
}

.coa-btn-lg {
    @apply py-3 px-3;
    font-size: theme('fontSize.lg');
}

.coa-btn-base svg {
    width: 25px;
}

.coa-btn-xs svg {
    width: 17px;
}

.coa-btn-sm svg {
    width: 20px;
}

.coa-btn-lg svg {
    width: 26px;
}

.coa-btn-normal,
.coa-btn-blue {
    @apply bg-blue-500;
    color: theme('colors.white');
}

.coa-btn-delete,
.coa-btn-red {
    @apply bg-red-500 text-white;
}

.coa-btn-success,
.coa-btn-green {
    @apply bg-green-500 text-white;
}

.coa-btn-normal:hover,
.coa-btn-blue:hover {
    @apply bg-blue-700;
}

.coa-btn-delete:hover,
.coa-btn-red:hover {
    @apply bg-red-700;
}

.coa-btn-success:hover,
.coa-btn-green:hover {
    @apply bg-green-700;
}


.coa-btn:active {
    transform: scale(0.95);
    opacity: 0.8;
}

.coa-btn-cancel, .coa-btn-gray {
    background-color: theme('colors.gray.400');
}

.coa-btn-gray:hover, .coa-btn-cancel:hover {
    background-color: theme('colors.gray.700') !important;
}

.coa-btn.disabled {
    opacity: 0.4;
}

.coa-btn.rounded {
    @apply rounded-3xl;
}

</style>
