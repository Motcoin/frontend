<template>
<div>
  <span>Username:</span><input v-model="username"/>
  <button @click="login">Login</button>
  <button @click="testHandler">Test</button>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useLogin } from '../service/login'
import { test } from '../service/transaction'

export default defineComponent({
setup(){
  const username = ref('')
  const login = () => useLogin(username.value)
  const testHandler = () => test().then(res => console.log(res))
  return {
    login,
    username,
    testHandler
  }
}
});
</script>

<style>

</style>
