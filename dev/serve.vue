<script lang="ts">
import { defineComponent } from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
import { CoaButton } from '@/entry.esm'

export default defineComponent({
  name: 'ServeDev',
  components: {
    CoaButton,
  },
})
</script>

<template>
  <div id="app">
    <h1 class="text-3xl font-bold underline">Test tailwind</h1>
    <coa-button> Click here </coa-button>
    <button class="btn btn-blue background-red">click here 2</button>
  </div>
</template>

<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
