<template>
  <opener absolute>
    <template v-slot:header>
      Путешествия
    </template>
    <template v-slot:main>
      <ul>
        <li>Посмотреть по Ookla про интернет на месте, найти рейтинг провайдеров их тарифы и купить лучшие по прилёту (вероятно в аэропорту)</li>
        <li>Взять с собой мультитул (пасатижы, отвёртки, канцелярская всячина)</li>
        <li>Для отеля (особенно в Азии) простые кухонные приборы</li>
        <li>Удлинитель/тройник</li>
      </ul>
    </template>
  </opener>
</template>

<script>
import {Opener} from './commons'
export default {
  name: 'Traveling',
  components: {Opener}
}
</script>

<style scoped>

</style>
