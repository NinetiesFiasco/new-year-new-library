<template>
  <div>
    <h3>Express</h3> - простой nodejs фреймворк придставляющий из себя сервер

    <section>
      Переиспользование
      <ul>
        <li>Перейти в папку с проектами</li>
        <li>Запустить <CodeLine>git clone &lt;repository url&gt;</CodeLine></li>
        <li>Внутри папки с сервером запустить <CodeLine>npm i</CodeLine></li>
        <li>Запустите <CodeLine>git remote remove origin</CodeLine> для удаления привязанного репозитория на GitHub</li>
        <li>Повторить привязку к новому репозиторию</li>
      </ul>
    </section>

    <section>
      Создание простого сервера
      <ul>
        <li>Создаём папку</li>
        <li>запускаем npm init -y</li>
        <li>создаём .gitignore заносим туда node_modules и .env</li>
        <li>устанавливаем dotenv и express</li>
        <li>Создаём сервер в файле index.js</li>
        <li>Добавляем корневой GET запрос отправляющий в ответ 'Hello World!' и обработчик статических файлов </li>
        <li>Запускаем git init</li>
        <li>Комитим наш сервак</li>
        <li>Привязать проект к репозиторию</li>
        <li><a target="_blank" href="https://github.com/NinetiesFiasco/simple-express-server">Репозиторий</a></li>
        <li>Clone <CodeLine>git clone https://github.com/NinetiesFiasco/simple-express-server.git my-express</CodeLine></li>
      </ul>
    </section>

    <section>
      Сервер с примером CRUD
      <ul>
        <li>Создано из простого сервера</li>
        <li>Использовать будем MongoDB</li>
        <li>Установить mongodb драйвер <CodeLine>npm i mongodb</CodeLine></li>
        <li>Создать файл с соединением с DB mongodb.js, закэшировать соединения с коллекциями</li>
        <li>Создать api ветку example описать GET,POST,PUT,DELETE пути создать для них контроллеры и операции с DB.</li>
        <li>Привязать проект к репозиторию</li>
        <li><a target="_blank" href="https://github.com/NinetiesFiasco/express-crud">Репозиторий</a></li>
        <li>Clone <CodeLine>git clone https://github.com/NinetiesFiasco/express-crud.git my-express-crud</CodeLine></li>
      </ul>
    </section>
  </div>
</template>

<script>
import CodeLine from './commons/CodeLine.vue'
export default {
  components: { CodeLine },
  name: 'Express'
}
</script>

<style scoped>
h3 {
  display: inline-block;
}
</style>
        