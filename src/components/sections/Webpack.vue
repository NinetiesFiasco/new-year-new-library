<template>
  <div>
    <p>
      Webpack - средство компиляции js файлов, он позволяет преобразовать множество файлов в один и
      с помощью babel преобразовать весь код в стандарт EcmaScript 5. Мы будем использовать его чтобы сделать сборку для Express и Vue с hot reload.
    </p>

    <opener>
      <template v-slot:header>
        Webpack с пустым сервером и Vue клиентом
      </template>
      <template v-slot:main>
        <ul>
          <li><a href="https://github.com/NinetiesFiasco/webpack-boilerplate">Репозиторий</a></li>
          <li><CodeLine>git clone https://github.com/NinetiesFiasco/webpack-boilerplate my-webpack-boilerplate</CodeLine></li>
        </ul>
      </template>
    </opener>

    <opener>
      <template v-slot:header>
        Webpack с авторизацией
      </template>
      <template v-slot:main>
        <ul>
          <li><a href="https://github.com/NinetiesFiasco/webpack-auth-api.git">Репозиторий</a></li>
          <li><CodeLine>git clone https://github.com/NinetiesFiasco/webpack-auth-api.git my-webpack-auth-api</CodeLine></li>
          <li class='description'>
            <h3>Сервер user</h3>
            <dl>
              <dt>GET '/api/users'</dt>
              <dd>Выдаёт список всех юзеров в JSON (не защищён, используется для информации)</dd>
              <dt>POST '/api/users'</dt>
              <dd>Создаёт нового пользователя по имени, email и паролю из 6 символов</dd>
            </dl>
            <dl>
              <dt>GET '/api/users/:userId'</dt>
              <dd>Получить данные по одному пользователю (нужна аутентификация)</dd>
              <dt>PUT '/api/users/:userId'</dt>
              <dd>Обновить данные по id пользователя (нужна аутентификация и авторизация)</dd>
              <dt>DELETE '/api/users/:userId'</dt>
              <dd>Удалить профиль (нужна аутентификация и авторизация)</dd>
            </dl>
            <h3>Сервер user middleware</h3>
            <dl>
              <dt>userById</dt>
              <dd>Вызывается когда есть параметр :userId в пути, извлекает профаил пользователя из базы и устанавливает его в поле 'req.profile'</dd>
            </dl>
            <h3>Сервер auth</h3>
            <dl>
              <dt>POST '/api/auth/signin'</dt>
              <dd>
                Аутентификация по логину(email) и паролю<br/>
                <ul>
                  <li>с помощью 'jsonwebtoken' шифрует токен с идентификатором пользователя и солью</li>
                  <li>записывает токен в куки с именем 't' и временем работы 9999 секунд (2.5 часа)</li>
                  <li>отправляет токен клиенту в JSON формате</li>
                </ul>
              </dd>
              <dt>GET '/api/auth/signout'</dt>
              <dd>
                <ul>
                  <li>Удаляет куки с именем 't'</li>
                </ul>
              </dd>
            </dl>
            <h3>Сервер auth middleware</h3>
            <dl>
              <dt>requireSignIn</dt>
              <dd>Защищает путь проверкой аутентификации, представляет из себя прямой вызов 'jsonwebtoken'</dd>
              <dt>hasAuthorization</dt>
              <dd>Сверяет id пользователя в токене с id из поля 'req.profile', который устанавливает функция userById </dd>
            </dl>
          </li>
        </ul>
      </template>
    </opener>
  </div>
</template>

<script>
import {CodeLine, Opener} from './commons'
export default {
  name: 'webpack',
  components: {
    CodeLine, Opener
  }
}
</script>

<style scoped>
.description {
  border: 3px solid white;
  border-radius: 15px;
  padding: 15px;
  margin-top: 10px;
}
.description dl{
  margin-left: 10px;
}
.description dt {
  color: lightblue;
  margin: 4px;
}
.restrictions {
  color: red;
}
</style>