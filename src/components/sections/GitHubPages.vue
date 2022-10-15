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
                  Создаём файл <span class="code">vue.config.js</span> в корне проекта со следующим содержимым<br/>
                  <span class="code">
                    <pre>
    module.exports = {
      publicPath: process.env.NODE_ENV === "production" ? "/&lt;repository_name&gt;/" : "/",
    };
                    </pre>
                  </span>
                </li>
                <li>
                  Далее создаём сборку проекта
                  <span class="code">npm run build</span>
                </li>
                <li>
                  Далее добавляем сборку в git (вероятно придётся удалить запись /dist из <span class="code">.gitignore</span>)
                </li>
                <li>
                  И запускаем команду публикации
                  <span class="code">git subtree push --prefix dist origin gh-pages</span>
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
              <li>Запустить сборку <span class="code">npm run build</span></li>
              <li>Создать комит с новой сборкой ??? не точно</li>
              <li>Опубликовать сборку <span class="code">git subtree push --prefix dist origin gh-pages</span></li>
            </ul>
          </template>
        </opener>
      </div>
    </template>

  </opener>
</template>

<script>
import {Opener} from './commons'
export default {
  name: 'GitHubPages',
  components: {Opener}
}
</script>

<style scope>

</style>