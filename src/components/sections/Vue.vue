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
        <CodeLine>vue create project-name</CodeLine> - команда для создания нового приложения.        
      </div>
    </template>

  </opener>
</template>

<script>
import {Opener, CodeLine} from './commons'
export default {
  name: 'Vue',
  components: {Opener, CodeLine}
}
</script>

<style scope>

</style>