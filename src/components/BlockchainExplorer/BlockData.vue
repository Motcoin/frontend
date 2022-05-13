<template>
  <div>
    {{data}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
props: {
  data: {
    type: String,
    required: true
  },
},
});
</script>

<style>

</style>
