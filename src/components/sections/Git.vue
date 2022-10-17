<template>
  <p>
    GIT - система контроля версий, он позволяет хранить свою работу в упорядоченном виде,
    создавать коробочку для каждого отдельного проекта, хранить историю и подключать к разработке других людей и работать с ними параллельно
  </p>
  <div>
    <div>После инициализации проекта его стоит привязать к удалённому GIT репозиторию, у меня заведён аккаунт на GitHub, я создал там новый репозиторий с таким же названием
      <CodeLine>new-year-new-library</CodeLine>, сразу после создания GIT предложил связать его с локальным проектом при помощи следующих команд(в командной строке переходим в папку с проектом):
      <ul>
        <li>
          <CodeLine>git remote add origin repository-url</CodeLine>, где repository-url это url адрес репозитория, который выдал GitHub.
        </li>
        <li>
          <CodeLine>git branch -M master</CodeLine> - не смог быстро найти что означает флаг -M, похоже что это указание главной ветки.
        </li>
        <li>
          <CodeLine>git push -u origin master</CodeLine> - опубликовать локальные коммиты в удалённый репозиторий.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {CodeLine} from './commons'

export default {
  name: 'Git',
  components: {CodeLine}
}
</script>

<style scope>

</style>