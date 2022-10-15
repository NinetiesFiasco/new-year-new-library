<template>
  <opener absolute>

    <template v-slot:header>
      GitHub pages
    </template>
    
    <template v-slot:main>
      <div class="description">
        GitHub pages - позволяет публиковать свой программный код на сервере github.
      </div>
      <div>
        <h3>VUE</h3>
        <opener>
          <template v-slot:header>
            CREATE
          </template>
          <template v-slot:main>
            <div>
              Публикация VUE проекта на GitHub pages.
            </div>
            <div>
              <ul>
                <li>
                  Так как GitHub pages создаёт postfix в url сайта, нужно сконфигурировать vue для работы с GitHub pages.<br/>
                  Создаём файл <CodeLine>vue.config.js</CodeLine> в корне проекта со следующим содержимым<br/>
                  <CodeLine>
                    <pre>
    module.exports = {
      publicPath: process.env.NODE_ENV === "production" ? "/&lt;repository_name&gt;/" : "/",
    };
                    </pre>
                  </CodeLine>
                </li>
                <li>
                  Далее создаём сборку проекта
                  <CodeLine>npm run build</CodeLine>
                </li>
                <li>
                  Далее добавляем сборку в git (вероятно придётся удалить запись /dist из <CodeLine>.gitignore</CodeLine>)
                </li>
                <li>
                  И запускаем команду публикации
                  <CodeLine>git subtree push --prefix dist origin gh-pages</CodeLine>
                  она создаст дополнительную ветку gh-pages в репозитории GitHub из локальной папки dist.
                  Из неё же GitHub будет показывать сайт.
                </li>
              </ul>
            </div>
          </template>
        </opener>
        <opener>
          <template v-slot:header>
            UPDATE
          </template>
          <template v-slot:main>
            <div>Обновление проекта на GitHub pages</div>
            <ul>
              <li>Запустить сборку <CodeLine>npm run build</CodeLine></li>
              <li>Создать комит с новой сборкой <CodeLine>git commit -a -m"new build"</CodeLine></li>
              <li>Опубликовать сборку <CodeLine>git subtree push --prefix dist origin gh-pages</CodeLine></li>
            </ul>
          </template>
        </opener>
      </div>
    </template>

  </opener>
</template>

<script>
import {Opener, CodeLine} from './commons'
export default {
  name: 'GitHubPages',
  components: {Opener, CodeLine}
}
</script>

<style scope>

</style>