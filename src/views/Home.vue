<template>
  <div class="container mx-auto ">
    <div class="flex bg-blue-300 p-2 mb-2">
      <div class="flex justify-center align-middle items-center">
        <img alt="Motcoin logo" src="../assets/Motcoin_Logo.png" class="w-24 h-24"/>
        <div class="text-4xl ml-2">
          MotCoin <span class="font-semibold">MC</span>
        </div>
      </div>
      <div class="flex-grow flex items-start justify-end">
        <div class="text-3xl">
          NODE: {{port}}
        </div>
        <mine-button class="h-24 w-24" @click="mineBlock" :loading="currentLoadingState"/>
      </div>
    </div>
    <div>
      <mine-control />
      <blockchain-explorer v-if="blockchain.length" :blockchain="blockchain" />
      <div v-else>
        No Chain to epxlore
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent,ref, onMounted } from 'vue'
import {
  blockchain,
  useBlockchain,
  useMineBlock,
  port,
  loadingState,
  currentLoadingState,
} from '../service/mine'

import Blockchain from '../components/Blockchain.vue'
import MineButton from '../components/MineButton.vue'
import MineControl from '../components/MineControl.vue'
import BlockchainExplorer from '../components/BlockchainExplorer/BlockchainExplorer.vue'

export default defineComponent({
  components: { Blockchain, MineButton, MineControl, BlockchainExplorer },
  name: 'App',
  setup(){
    const newBlockData = ref('Agency Agency')
    const mineBlock = () => useMineBlock(newBlockData.value,port.value)
    onMounted(() => {
      document.body.addEventListener('keyup', ({ key, keyCode}) => {
        const keyPressed = key || keyCode
        switch(keyPressed){
          case "ArrowRight": {
            port.value++
            break
          } 
          case "ArrowLeft": {
            port.value--
          }
        }
        
      })
    })
    return {
      blockchain,
      newBlockData,
      useBlockchain,
      mineBlock,
      port,
      currentLoadingState,
      loadingState,
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.outlined{
  outline: 1px solid white;
}
</style>