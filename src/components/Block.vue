<template>
  <div class="border">
    <div class="index">

    </div>
    <div class="info">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
props: {
  block: {
    type: Object,
    required: true
  },
},
});
</script>

<style>
</style>
