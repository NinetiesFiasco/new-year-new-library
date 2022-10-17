<template>
  <div id="seredin-library">
    <nav>
      <router-link to="/">Библиотека программиста</router-link>

      <router-link to="/vue">Vue</router-link>
      <router-link to="/git">Git</router-link>
      <router-link to="/git-hub-pages">GitHub pages</router-link>
      <router-link to="/traveling">Путешествия</router-link>
    </nav>
    <router-view />

  </div>
</template>

<script>


export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
nav a {
  display: inline-block;
  border: 1px solid #333;
  cursor: pointer;
  padding: 3px 6px;
  margin: 0px 2px;
  text-decoration: none;
  color: white;
}
nav a:hover {
  background: #333;
}
nav .router-link-active {
  background: purple;
}
</style>
