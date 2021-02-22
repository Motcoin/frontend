<template>
<div class="chain">
  <div v-for="(block, index) in blockchain" :key="index" class="chain">
    <div class="arrow" v-if="index !== 0">
        <div class="line"></div>
        <div class="point"></div>
    </div>
    <block :block="block" class="w-40"/>
  </div>
  <div v-if="!blockchain.length" class="w-40 border-2 border-black">
    This Node is not running
  </div>
</div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Block from './Block.vue'

export default defineComponent({
components: {
  Block,
},
props: {
  blockchain: {
    type: Array,
    required: true
  },
},
});
</script>

<style>
.arrow {
  width: 80px;
}

.line {
  margin-top: 14px;
  width: 50px;
  background: black;
  height: 10px;
  float: left;
}

.point {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 30px solid black;
  float: right;
}
.chain {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
</style>
