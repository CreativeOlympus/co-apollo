<script lang="ts">
import { defineComponent } from 'vue'
import { CoaButton } from '@/entry.esm'
import { BanIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'ServeDev',
  components: {
    CoaButton,
    BanIcon,
  },
})
</script>

<template>
  <div id="app">
    <coa-button :rounded="true" type="delete">
      <slot name="prepend"><BanIcon></BanIcon></slot>
      Click here
    </coa-button>
  </div>
</template>
