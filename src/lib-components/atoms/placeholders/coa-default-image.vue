<script lang="ts">
import { defineComponent } from 'vue'
import { PhotographIcon } from '@heroicons/vue/outline'
import { PhotographIcon as PhotographIconSolid } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'DefaultImage',
  components: {
    PhotographIcon,
    PhotographIconSolid,
  },
  props: {
    iconType: {
      type: String,
      default: 'solid',
    },
  },
})
</script>
<template>
  <div class="coa-default-image mx-auto w-44 p-5 m-10">
    <PhotographIcon v-if="iconType === 'outline'" class="w-full" />
    <PhotographIconSolid v-else />
  </div>
</template>
