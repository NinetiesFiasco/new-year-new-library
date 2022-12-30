<template>
  <div>
    VUE - JS фреймворк для компонентной разработки, позволяет разделять jS, CSS и HTML относящиеся к отдельному блоку по отдельным файлам.
  </div>
  <div>
    <CodeLine>vue create project-name</CodeLine> - команда для создания нового приложения.
  </div>
  <div>
    <CodeLine>npm run serve</CodeLine> - запустить сервер.
  </div>

  <p>Попытаться описать зачем нужен каждый отдельный проект</p>

  <div>
    <h2>Проекты</h2>

    <opener>
      <template v-slot:header>
        Переиспользование
      </template>
      <template v-slot:main>
        На примере пустого проекта, годится для других
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
      </template>
    </opener>
    
    <opener>
      <template v-slot:header>
        Пустой проект
      </template>
      <template v-slot:main>
        <ul>
          <li>Перейдите в папку где будет находиться проект <CodeLine>vue create empty-project</CodeLine></li>
          <li>Выберите vue 3 preview</li>
          <li>Удалить предустановки vue, думаю тут будет ссылка на коммит</li>
          <li>Создать одноимённый репозиторий на GitHub</li>
          <li>Привязать к репозиторию проект (можно дать ссылку на страницу git)</li>
          <li>
            <a href="https://github.com/NinetiesFiasco/empty-project">empty-project</a>
          </li>
          <li>
            <CodeLine>git clone https://github.com/NinetiesFiasco/empty-project.git my-empty-project</CodeLine>
          </li>
        </ul> 
      </template>
    </opener>

<opener>
  <template v-slot:header>
    Проект с роутером
  </template>
  <template v-slot:main>
    <ul>
      <li>Провести процедуру переиспользования из пустого проекта с именем project-with-router</li>
      <li>Удалить пустой компонет</li>
      <li>Создать страницы</li>
      <li>Запустить <CodeLine>npm i vue-router</CodeLine></li>
      <li>Следующие 2 пункта имеют расхождения синтаксиса в разных версиях Vue и VueRouter</li>
      <li>Создать router.js используя созданные страницы и createRouter <a href="https://github.com/NinetiesFiasco/project-with-router/commit/cf8a2d81338948ede540d01b86512e7207c04596">коммит</a></li>
      <li>и импортировать router.js в main.js и прописать использование</li>
      <li>В App.vue создать маршрутизацию с помощью &lt;router-link&gt; и &lt;router-view&gt;</li>
      <li>
        <a href="https://github.com/NinetiesFiasco/project-with-router">project-with-router</a>
      </li>
      <li>
        <CodeLine>git clone https://github.com/NinetiesFiasco/project-with-router.git my-project-with-router</CodeLine>
      </li>
    </ul>
  </template>
</opener>

<opener>
  <template v-slot:header>
    Проект со стором
  </template>
  <template v-slot:main>
    <ul>
      <li>Провести процедуру переиспользования из пустого проекта с именем vue-vuex-project</li>
      <li>Переименовать заготовленный компонент в StoreExample.vue, переопределить ссылки на него, создать разметку под методы и данные</li>
      <li>Запустить <CodeLine>npm i vuex</CodeLine></li>
      <li>Создать папку store с файлом store.js, в нём создать store с модулем exampleStore (ссылка на комит и файл)</li>
      <li>Создать exampleStore.js с модулем стора содержащим стейт, мутации, экшены и гетеры (желательно использовать namespaced: true)</li>
      <li>Импортировать store в main.js и прописать app.use(store)</li>
      <li>В StoreExample.vue импортировать мапящие функции и промапить геттеры, мутации и экшены, привязать их к кнопкам</li>
      <li>
        <a href="https://github.com/NinetiesFiasco/vue-vuex-project">vue-vuex-project</a>
      </li>
      <li>
        <CodeLine>git clone https://github.com/NinetiesFiasco/vue-vuex-project.git my-vue-vuex-project</CodeLine>
      </li>
    </ul>
  </template>
</opener>

<opener>
  <template v-slot:header>
    CRUD система
  </template>
  <template v-slot:main>
    <ul>
      <li>Провести процедуру переиспользования из пустого проекта с именем crud-system</li>
      <li>Переименовать заготовленный компонент в Crud.vue</li>
      <li>Для старта сделать CRUD в одном компоненте и хранить данные в локальном стейте</li>
      <li>Разметка: сверстать лист или таблицу с записями, их можно пронумеровать и сделать кнопки обновить и удалить для каждой записи</li>
      <li>Сделать блок для редактирования одной записи или добавления новой, определять режим по наличию идентификатора</li>
      <li>Создать стейт</li>
      <li>
        Написать методы: 
          <ul>
            <li>getEmty - генерация пустого стейта</li>
            <li>refresh - обнуление стейта при отмене или после сохранения</li>
            <li>save - сохранение существующей записи или добавление новой</li>
            <li>update - начать редактировать существующую запись</li>
            <li>_delete - удалить существующую запись</li>
          </ul>
      </li>
      <li>Далее перевести стейтменеджмент в vuex</li>
      <li>Запустить <CodeLine>npm i vuex</CodeLine> и создать стор (дать ссылку на проект со стором)</li>
      <li>В сторе инициализировать стейт, перенести в мутации следующие функции refresh, startuUpdate, create, update, _delete </li>
      <li>Создать экшен save, который будет вызывать мутации update, create и refresh</li>
      <li>Написать гетеры для стейта</li>
      <li>В компоненте удалить стейт и методы, импортировать геттеры, мутации и экшен из стора, привязать их к обработчикам</li>
      <li>
        <a href="https://github.com/NinetiesFiasco/crud-system">crud-system</a>
      </li>
      <li>
        <CodeLine>git clone https://github.com/NinetiesFiasco/crud-system.git my-crud-system</CodeLine>
      </li>
    </ul>
  </template>
</opener>

  </div>
</template>

<script>
import {CodeLine, Opener} from './commons'
export default {
  name: 'Vue',
  components: {CodeLine, Opener}
}
</script>

<style scope>

</style>