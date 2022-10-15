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
      <div>
        <CodeLine>npm run serve</CodeLine> - запустить сервер.
      </div>

      <div>
        <h2>Проекты</h2>
        <div>
          
          <h3>Пустой проект</h3>
          
          <div>
            Создание:
            <ul>
              <li>Перейдите в папку где будет находиться проект <CodeLine>vue create empty-project</CodeLine></li>
              <li>Выберите vue 3 preview</li>
              <li>Удалить предустановки vue, думаю тут будет ссылка на коммит</li>
              <li>Создать одноимённый репозиторий на GitHub</li>
              <li>Привязать к репозиторию проект (можно дать ссылку на страницу git)</li>
              <li>
                <a href="https://github.com/NinetiesFiasco/empty-project">empty-project</a>
              </li>
            </ul> 
          </div>

          <div>
            Переиспользование:
            <ul>
              <li>Перейдите в папку где будет находиться проект <CodeLine>git clone https://github.com/NinetiesFiasco/empty-project new-project-name</CodeLine></li>
              <li>
                Зайдите внутрь папки с проектом и замените название в трёх файлах 
                <CodeLine>package.json</CodeLine><CodeLine>package-lock.json</CodeLine><CodeLine>README.md</CodeLine>
                измения стоит закомитить <CodeLine>git commit -a -m"Rename project"</CodeLine>
              </li>
              <li>Запустите <CodeLine>npm i</CodeLine> для установки зависимостей</li>
              <li>Запустите <CodeLine>git remote remove origin</CodeLine> для удаления привязанного репозитория на GitHub</li>
              <li>Создайте новый репозиторий на GitHub</li>
              <li>Повторите процедуру привязки к репозиторию (можно дать ссылку на страницу git)</li>
              <li>
                <a href="https://github.com/NinetiesFiasco/new-empty-project">new-empty-project</a>
              </li>
            </ul>
          </div>
        </div>
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