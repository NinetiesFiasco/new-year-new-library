<template>
  <opener absolute>

    <template v-slot:header>
      VUE
    </template>
    
    <template v-slot:main>
      <div>
        VUE - JS фреймворк для компонентной разработки, позволяет разделять jS, CSS и HTML относящиеся к отдельному блоку по отдельным файлам.
      </div>
      <div>
        <span class="code">vue create project-name</span> - команда для создания нового приложения.        
      </div>
    </template>

  </opener>
</template>

<script>
import {Opener} from './commons'
export default {
  name: 'Vue',
  components: {Opener}
}
</script>

<style scope>

</style>