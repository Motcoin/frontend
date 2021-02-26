<template>
  <div>
    <div class="header flex flex-row bg-blue-300 items-center">
      <div class="text-2xl">
      Blockchain Explorer
      </div>
      <div class="flex flex-grow justify-end items-center">
        <button @click="prev" class="h-18 px-3"><arrow-left-bold class="h-full w-12" /></button>
        <div class=" text-5xl font-mono">
        {{index}}/{{blockchain.length - 1}}
        </div>
        <button @click="next" class="h-18 px-3"><arrow-right-bold class="h-full w-12" /></button>
      </div>
    </div>
    <div> 
      <block-data :data="currentBlock.data" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref, Ref } from 'vue';
import { ArrowLeftBold, ArrowRightBold } from 'mdue'

import BlockData from './BlockData.vue'

export default defineComponent({
components: {
  ArrowLeftBold,
  ArrowRightBold,
  BlockData
},
props: {
  blockchain: {
    type: Array,
    default: []
  },
},
setup(props){
  const latestBlock = computed(() => props.blockchain[props.blockchain.length - 1])
  const currentBlock = ref(latestBlock.value) as Ref<any>
  const index = computed(() => currentBlock.value.index)

  watch(() => props.blockchain,() => {
    currentBlock.value = latestBlock.value
  })

  const next = () => {
    currentBlock.value = props.blockchain[(index.value + 1) % props.blockchain.length]
  }

  const prev = () => {
    if(index.value === 0){
      currentBlock.value = latestBlock.value
    } else {
      currentBlock.value = props.blockchain[index.value - 1]
    }
  }

  return {
    latestBlock,
    currentBlock,
    index,
    next,
    prev
  }
}
});
</script>

<style>

</style>
