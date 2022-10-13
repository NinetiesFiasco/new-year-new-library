<template>
  <div id="seredin-library">
    
    <div>
      <h1>Библиотека программиста</h1>
      <p>Как водится каждый раз начинаю писать новую библиотеку с кодом :-) посмотрим что выйдет на этот раз</p>
      <p>Идея в том что теперь будет множество раздвижных и всплывающих окон и множество ссылок на GIT с описанием использования.</p>
      <div>
        Буду считать это документацией моей жизненной позиции :-) главная задача грамотно скомпоновать данные и добиться следующих результатов:
        <ul>
          <li>
            Возможность писать свой взгляд на описываемые объекты, 
            давать краткий и развёрнутый комментарии, дать пользователю возможность обращаться к ним, 
            редактировать, возможно обращаться к истории. 
            Главная задача в голове дать пользователю что-то в духе обращения к краткой методичке, краткому комментарию и развёрнотому комментарию на выбор.
          </li>
          <li>
            Сделать интуитивно понятную дизайн и вёрстку, постараться подогнать под разные девайсы.
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2>VUE</h2>
      <div>
        VUE - JS фреймворк для компонентной разработки, позволяет разделять jS, CSS и HTML относящиеся к отдельному блоку по отдельным файлам.
      </div>
      <div>
        <span class="code">vue create project-name</span> - команда для создания нового приложения.        
      </div>
    </div>

    <div>
      <h2>GIT</h2>
      <p>
        GIT - система контроля версий, он позволяет хранить свою работу в упорядоченном виде,
        создавать коробочку для каждого отдельного проекта, хранить историю и подключать к разработке других людей и работать с ними параллельно
      </p>
      <div>
        <div>После инициализации проекта его стоит привязать к удалённому GIT репозиторию, у меня заведён аккаунт на GitHub, я создал там новый репозиторий с таким же названием
          <span class="code">new-year-new-library</span>, сразу после создания GIT предложил связать его с локальным проектом при помощи следующих команд(в командной строке переходим в папку с проектом):
          <ul>
            <li>
              <span class="code">git remote add origin repository-url</span>, где repository-url это url адрес репозитория, который выдал GitHub.
            </li>
            <li>
              <span class="code">git branch -M master</span> - не смог быстро найти что означает флаг -M, похоже что это указание главной ветки.
            </li>
            <li>
              <span class="code">git push -u origin master</span> - опубликовать локальные коммиты в удалённый репозиторий.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2>GitHub pages</h2>
        <div class="description">
          GitHub pages - позволяет публиковать свой программный код на сервере github.
        </div>
        <div>
          <h3>VUE</h3>
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
          
          <div>Обновление проекта на GitHub pages</div>
          <ul>
            <li>Запустить сборку <span class="code">npm run build</span></li>
            <li>Опубликовать сборку <span class="code">git subtree push --prefix dist origin gh-pages</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
.code {
  background:#444;
  padding: 5px;
  display: inline-block;
}
</style>
