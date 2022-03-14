<template>
  <div class="coa-progressbar coa-circle-progressbar">
    testing
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoaCircleProgressBar',
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    stream: {
      type: Boolean,
      default() {
        return false
      }
    },
    indeterminate: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
})
</script>
