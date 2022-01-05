<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { CoApolloDsSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  CoApolloDsSample,
  // }
});
</script>

<template>
  <div id="app">
    <co-apollo-ds-sample />
  </div>
</template>
