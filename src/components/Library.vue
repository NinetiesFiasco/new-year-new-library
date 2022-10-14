<template>
  <div id="seredin-library">

    <CurrentLibrary />
    <Vue />
    <Git />
    <GitHubPages />

  </div>
</template>

<script>
import {CurrentLibrary, Vue, Git, GitHubPages} from './sections'


export default {
  name: 'HelloWorld',
  components: {
    CurrentLibrary, Vue, Git, GitHubPages
  }
}
</script>

<style scoped>
.code {
  background:#444;
  padding: 5px;
  display: inline-block;
}
</style>
