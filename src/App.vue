<template>
  <div class="application">
    <Library />
  </div>
</template>

<script>
import Library from './components/Library.vue'

export default {
  name: 'App',
  components: {
    Library
  }
}
</script>

<style>
body {
  background: black;
  color: white;
  margin: 0px;
  padding: 25px 75px;
}
</style>
