<script lang="ts">
import { defineComponent } from 'vue'
import { CoaButton, CoaCarousel } from '@/entry.esm'
import { TrashIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'ServeDev',
  components: {
    CoaButton,
    CoaCarousel,
    TrashIcon,
  },
})
</script>

<template>
  <div id="app">
    <h1 class="text-3xl mb-3">Button preview test</h1>
    <hr class="mb-3" />
    <coa-button :rounded="true" type="delete">
      <slot name="prepend"><TrashIcon /></slot>
    </coa-button>

    <CoaCarousel></CoaCarousel>
  </div>
</template>
