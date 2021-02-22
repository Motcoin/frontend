<template>
  <button v-bind="$attrs" :disabled="loading || disabled">
    <pickaxe class="h-full w-full" v-if="!loading && !disabled" />
    <loading class="animate-spin h-full w-full" v-else-if="loading" />
    <disabled v-else />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Pickaxe, Loading } from 'mdue'

export default defineComponent({
components: {
  Pickaxe, Loading
},
props: {
  loading: {
    type: Boolean,
    required: true
  },
},
});
</script>

<style>

</style>
