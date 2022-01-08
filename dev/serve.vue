<script lang="ts">
import { defineComponent } from 'vue'
// import { CoaListItem } from '@/entry.esm'
// Uncomment import and local "components" registration if library is not registered globally.
import { CoApolloDsSample } from '@/entry.esm'

export default defineComponent({
  name: 'ServeDev',
  components: {
    //    CoaListItem,
    CoApolloDsSample,
  },
})
</script>

<template>
  <div id="app">
    <co-apollo-ds-sample />
    <h1 class="text-3xl font-bold underline">Test tailwind</h1>
  </div>
</template>
