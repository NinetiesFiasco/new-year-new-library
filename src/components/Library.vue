<template>
  <div id="seredin-library">
    <nav>
      <router-link to="/">Библиотека программиста</router-link>

      <router-link to="/vue">VUE</router-link>
      <router-link to="/git">GIT</router-link>
      <router-link to="/git-hub-pages">GitHub pages</router-link>
      <router-link to="/traveling">Путешествия</router-link>
      <router-link to="/html5">HTML5</router-link>
      <router-link to="/express">Express</router-link>
      <router-link to="/express-and-vue">Express & VUE</router-link>
      <router-link to="/vue-tests">VUE tests</router-link>
    </nav>

    <main>
      <router-view />
    </main>

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
nav .router-link-active, nav .router-link-active:hover {
  background: purple;
}
main {
  margin: 26px 0px 0px 0px;
}
</style>
