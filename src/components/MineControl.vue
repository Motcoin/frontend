<template>
<div>
  <p class="text-2xl">Mine Command Center</p>
  <button @click="getActivePorts">Get Active Nodes</button>
  <div class="flex border-black border-2 h-32 mb-2">
    <div class="border-r-2 border-black h-full w-24 flex flex-col" v-for="port in activePorts" :key="port" >
      <div class="border-b-2 border-black">{{port}}</div>
      <mine-button @click="mineBlock(port)" :loading="loadingState[port]" />
    </div>
  </div>  
</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { useFindActiveNodes, useMineBlock, loadingState } from '../service/mine'
import MineButton from './MineButton.vue'

export default defineComponent({
components: {
  MineButton,
},
setup(){
  const activePorts = ref([]) as Ref<number[]>
  const getActivePorts = () => {
    useFindActiveNodes().then(ports => activePorts.value = ports)
  }
  getActivePorts()
  const mineBlock = (port:number) => {
    console.log('called mineBlock with port',port);
    useMineBlock('Agency Agency', port)
  }
  return {
    activePorts,
    getActivePorts,
    loadingState,
    mineBlock
  }
}
});
</script>

<style>

</style>
