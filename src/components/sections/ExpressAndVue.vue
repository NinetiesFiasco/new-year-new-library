<template>
  <article>
    <h2>Express и VUE с MongoDB</h2>

    <section>
      Связывание crud системы VUE и Express
      <ul>
        <li>наверное надо будет придумать описание попозже, (много ерунды тяжело за неё взяться)</li>
        <li><a href="https://github.com/NinetiesFiasco/express-vue-mongo-crud" target="_blank">Репозиторий</a></li>
        <li><CodeLine>git clone https://github.com/NinetiesFiasco/express-vue-mongo-crud.git my-vue-express-crud</CodeLine></li>
      </ul>
    </section>
    
    <section>
      CRUD с пагинацией и порефакторенный
      <ul>
        <li>Описание тож храмает</li>
        <li><a href="https://github.com/NinetiesFiasco/Improved-CRUD.git" target="_blank">Репозиторий</a></li>
        <li><CodeLine>git clone https://github.com/NinetiesFiasco/Improved-CRUD.git my-improved-crud</CodeLine></li>
      </ul>
    </section>
    
    <section>
      CRUD переведён на ODM mongoose
      <ul>
        <li>Сделан на основе 'CRUD с пагинацией и порефакторенный'</li>
        <li><a href="https://github.com/NinetiesFiasco/mongoose-crud.git" target="_blank">Репозиторий</a></li>
        <li><CodeLine>git clone https://github.com/NinetiesFiasco/mongoose-crud.git my-mongoose-crud</CodeLine></li>
      </ul>
    </section>

    <section>
      использование CSURF 
      <ul>
        <li><a href="https://github.com/NinetiesFiasco/express-csurf.git" target="_blank">Репозиторий</a></li>
        <li><CodeLine>git clone https://github.com/NinetiesFiasco/express-csurf.git my-mongoose-crud</CodeLine></li>
      </ul>
    </section>

  </article>
</template>

<script>
import {CodeLine} from './commons'
export default {
  name: 'ExpressVue',
  components: {
    CodeLine
  }
}
</script>

<style scoped>
</style>
        