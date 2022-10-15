<template>
  <div id="seredin-library">

    <CurrentLibrary />

    <div class="chapters">    
      <Vue />
      <Git />
      <GitHubPages />
      <Traveling />
    </div>

  </div>
</template>

<script>
import {CurrentLibrary, Vue, Git, GitHubPages, Traveling} from './sections'


export default {
  name: 'HelloWorld',
  components: {
    CurrentLibrary, Vue, Git, GitHubPages, Traveling
  }
}
</script>

<style scoped>
.chapters {
  display: flex;
  margin: 10px 0px;
}
.code {
  background:#444;
  padding: 5px;
  display: inline-block;
}
</style>
