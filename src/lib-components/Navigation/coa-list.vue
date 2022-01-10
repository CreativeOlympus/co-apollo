<script lang="ts">
import { defineComponent } from 'vue'
import CoaListItem from './coa-list-item.vue'

export default defineComponent({
  name: 'coa-list',
  components: { CoaListItem },
})
</script>
<template>
  <div class="coa-list">
    <component :is="'header'">
      <template>
        <coa-list-item />
      </template>
    </component>
  </div>
</template>
