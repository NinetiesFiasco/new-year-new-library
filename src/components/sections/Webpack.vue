<template>
  <div>
    Webpack - средство компиляции js файлов, он позволяет преобразовать множество файлов в один и
    с помощью babel преобразовать весь код в стандарт EcmaScript 5. Мы будем использовать его чтобы сделать сборку для Express и Vue с hot reload.
    
    <ul>
      <li>Webpack с пустым сервером и Vue клиентом</li>
      <li><a href="https://github.com/NinetiesFiasco/webpack-boilerplate">Репозиторий</a></li>
      <li><CodeLine>git clone https://github.com/NinetiesFiasco/webpack-boilerplate my-webpack-boilerplate</CodeLine></li>
    </ul>

    <ul>
      <li>Webpack с авторизацией</li>
      <li><a href="https://github.com/NinetiesFiasco/webpack-auth-api.git">Репозиторий</a></li>
      <li><CodeLine>git clone https://github.com/NinetiesFiasco/webpack-auth-api.git my-webpack-auth-api</CodeLine></li>
      <li>Будет круто задокументировать API</li>  
    </ul>

  </div>
</template>

<script>
import {CodeLine} from './commons'
export default {
  name: 'webpack',
  components: {
    CodeLine
  }
}
</script>

<style>

</style>