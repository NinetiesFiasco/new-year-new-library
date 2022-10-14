<template>
  <div>
    <div @click="toggle">
      <h2>GIT</h2>
    </div>
    <div v-if="isOpen">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Git',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scope>

</style>