import { ref, Ref, computed, watch } from 'vue'

const BASE_URL = 'http://localhost:'
const START_PORT = 8000

export const useFindActiveNodes = ():Promise<number[]> => {
  return new Promise(async (resolve,_) => {
    let activePorts = []
    let foundInactive = false;
    for(let port = START_PORT; !foundInactive; port++){
      const chain = await fetch(`${BASE_URL}${port}/blocks`).then(res => res.json()).catch(e => {
        foundInactive = true
      })
      console.log(chain);
      if(chain){
        console.log(port,'is running');
        activePorts.push(port)
      }
    }
    console.log(activePorts);
    resolve(activePorts)
  }) 
}

//ports
export const port = ref(8000) as Ref<number>

interface portLoadingState {
  [key:string]: boolean
}
export const loadingState = ref({}) as Ref<portLoadingState>
const setSpecificPort = (port: number, value: boolean) => loadingState.value[port.toString()] = value
export const currentLoadingState = computed({
  get: () => loadingState.value[port.value.toString()],
  set: (newValue: boolean) => loadingState.value[port.value.toString()] = newValue
})


//chain
export const blockchain = ref([])
export const latestBlock = computed(() => blockchain.value[blockchain.value.length - 1])

export const useBlockchain = () => {
  fetch(`${BASE_URL}${port.value}/blocks`)
    .then(res => res.json())
    .then(res => blockchain.value = res)
    .catch(() => {
      blockchain.value = []
    })
}

watch(port,() => {
  useBlockchain()
})

//mining
export const useMineBlock = (newBlockData: string, port: number) => {
  const data = { data: `Miner: ${port}, ` + newBlockData }
  setSpecificPort(port, true)
  fetch(`http://localhost:${port}/mineBlock`,{ 
      method: 'post', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }
  )
  .then(() => {
    setSpecificPort(port,false)
    useBlockchain()
  }).catch(e => {
    setSpecificPort(port,false)
  })
}

useBlockchain()
