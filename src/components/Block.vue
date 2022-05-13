<template>
  <div class="border-2 border-black p-2">
    <div class="index">
      {{block.index}}
    </div>
    <div class="truncate text-white px-2" :class="{'bg-blue-600': block.index % 2 === 0, 'bg-red-600': block.index % 2 === 1}">
      {{block.previousHash || 'genesis block'}}
    </div>
    <div class="info">
      {{block.data}}
    </div>
    <div>
      {{block.nonce}} | d: {{block.difficulty}}
    </div>
    <div class="truncate text-white px-2" :class="{'bg-red-600': block.index % 2 === 0, 'bg-blue-600': block.index % 2 === 1}">
      {{block.hash}}
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
.index{
  font-size: 2rem;
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
