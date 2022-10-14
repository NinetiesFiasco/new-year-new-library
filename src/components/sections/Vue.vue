<template>
  <div>
    <div @click="toggle">
      <h2>VUE</h2>
    </div>
    <div v-if="isOpen">
      <div>
        VUE - JS фреймворк для компонентной разработки, позволяет разделять jS, CSS и HTML относящиеся к отдельному блоку по отдельным файлам.
      </div>
      <div>
        <span class="code">vue create project-name</span> - команда для создания нового приложения.        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vue',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scope>

</style>