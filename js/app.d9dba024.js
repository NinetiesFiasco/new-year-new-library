(function(e){function t(t){for(var c,b,u=t[0],j=t[1],O=t[2],o=0,a=[];o<u.length;o++)b=u[o],Object.prototype.hasOwnProperty.call(n,b)&&n[b]&&a.push(n[b][0]),n[b]=0;for(c in j)Object.prototype.hasOwnProperty.call(j,c)&&(e[c]=j[c]);r&&r(t);while(a.length)a.shift()();return i.push.apply(i,O||[]),l()}function l(){for(var e,t=0;t<i.length;t++){for(var l=i[t],c=!0,u=1;u<l.length;u++){var j=l[u];0!==n[j]&&(c=!1)}c&&(i.splice(t--,1),e=b(b.s=l[0]))}return e}var c={},n={app:0},i=[];function b(t){if(c[t])return c[t].exports;var l=c[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,b),l.l=!0,l.exports}b.m=e,b.c=c,b.d=function(e,t,l){b.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},b.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.t=function(e,t){if(1&t&&(e=b(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(b.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)b.d(l,c,function(t){return e[t]}.bind(null,c));return l},b.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return b.d(t,"a",t),t},b.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},b.p="/new-year-new-library/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],j=u.push.bind(u);u.push=t,u=u.slice();for(var O=0;O<u.length;O++)t(u[O]);var r=j;i.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"0a30":function(e,t,l){"use strict";l("85ba")},"0db4":function(e,t,l){"use strict";l("8e5d")},"410c":function(e,t,l){"use strict";l("a274")},"56d7":function(e,t,l){"use strict";l.r(t);var c=l("7a23");const n={class:"application"};function i(e,t,l,i,b,u){const j=Object(c["z"])("Library");return Object(c["s"])(),Object(c["e"])("div",n,[Object(c["i"])(j)])}const b={id:"seredin-library"};function u(e,t,l,n,i,u){const j=Object(c["z"])("router-link"),O=Object(c["z"])("router-view");return Object(c["s"])(),Object(c["e"])("div",b,[Object(c["f"])("nav",null,[Object(c["i"])(j,{to:"/"},{default:Object(c["D"])(()=>[Object(c["h"])("Библиотека программиста")]),_:1}),Object(c["i"])(j,{to:"/vue"},{default:Object(c["D"])(()=>[Object(c["h"])("VUE")]),_:1}),Object(c["i"])(j,{to:"/git"},{default:Object(c["D"])(()=>[Object(c["h"])("GIT")]),_:1}),Object(c["i"])(j,{to:"/git-hub-pages"},{default:Object(c["D"])(()=>[Object(c["h"])("GitHub pages")]),_:1}),Object(c["i"])(j,{to:"/traveling"},{default:Object(c["D"])(()=>[Object(c["h"])("Путешествия")]),_:1}),Object(c["i"])(j,{to:"/html5"},{default:Object(c["D"])(()=>[Object(c["h"])("HTML5")]),_:1})]),Object(c["f"])("main",null,[Object(c["i"])(O)])])}var j={name:"HelloWorld"},O=(l("0db4"),l("6b0d")),r=l.n(O);const o=r()(j,[["render",u],["__scopeId","data-v-4f0a99f6"]]);var a=o,f={name:"App",components:{Library:a}};l("6994");const s=r()(f,[["render",i]]);var p=s,d=l("6605");const h=Object(c["f"])("div",null," VUE - JS фреймворк для компонентной разработки, позволяет разделять jS, CSS и HTML относящиеся к отдельному блоку по отдельным файлам. ",-1),m=Object(c["f"])("h2",null,"Проекты",-1),v=Object(c["f"])("li",null,"Создайте новый репозиторий на GitHub",-1),g=Object(c["f"])("li",null,"Повторите процедуру привязки к репозиторию (можно дать ссылку на страницу git)",-1),_=Object(c["f"])("li",null,[Object(c["f"])("a",{href:"https://github.com/NinetiesFiasco/new-empty-project"},"new-empty-project")],-1),y=Object(c["f"])("li",null,"Выберите vue 3 preview",-1),D=Object(c["f"])("li",null,"Удалить предустановки vue, думаю тут будет ссылка на коммит",-1),w=Object(c["f"])("li",null,"Создать одноимённый репозиторий на GitHub",-1),x=Object(c["f"])("li",null,"Привязать к репозиторию проект (можно дать ссылку на страницу git)",-1),G=Object(c["f"])("li",null,[Object(c["f"])("a",{href:"https://github.com/NinetiesFiasco/empty-project"},"empty-project")],-1),H=Object(c["f"])("li",null,"Провести процедуру переиспользования из пустого проекта с именем project-with-router",-1),C=Object(c["f"])("li",null,"Удалить пустой компонет",-1),L=Object(c["f"])("li",null,"Создать страницы",-1),S=Object(c["f"])("li",null,"Следующие 2 пункта имеют расхождения синтаксиса в разных версиях Vue и VueRouter",-1),k=Object(c["f"])("li",null,"Создать router.js используя созданные страницы и createRouter (можно отдать отсылку на коммит)",-1),E=Object(c["f"])("li",null,"иИмпортировать router.js в main.js и прописать использование",-1),T=Object(c["f"])("li",null,"В App.vue создать маршрутизацию с помощью <router-link> и <router-view>",-1),P=Object(c["f"])("li",null,[Object(c["f"])("a",{href:"https://github.com/NinetiesFiasco/project-with-router"},"project-with-router")],-1),z=Object(c["f"])("li",null,"Провести процедуру переиспользования из пустого проекта с именем vue-vuex-project",-1),M=Object(c["f"])("li",null,"Переименовать заготовленный компонент в StoreExample.vue, переопределить ссылки на него, создать разметку под методы и данные",-1),I=Object(c["f"])("li",null,"Создать папку store с файлом store.js, в нём создать store с модулем exampleStore (ссылка на комит и файл)",-1),V=Object(c["f"])("li",null,"Создать exampleStore.js с модулем стора содержащим стейт, мутации, экшены и гетеры (желательно использовать namespaced: true)",-1),N=Object(c["f"])("li",null,"Импортировать store в main.js и прописать app.use(store)",-1),A=Object(c["f"])("li",null,"В StoreExample.vue импортировать мапящие функции и промапить геттеры, мутации и экшены, привязать их к кнопкам",-1),F=Object(c["f"])("li",null,[Object(c["f"])("a",{href:"https://github.com/NinetiesFiasco/vue-vuex-project"},"vue-vuex-project")],-1);function R(e,t,l,n,i,b){const u=Object(c["z"])("CodeLine"),j=Object(c["z"])("opener");return Object(c["s"])(),Object(c["e"])(c["a"],null,[h,Object(c["f"])("div",null,[Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("vue create project-name")]),_:1}),Object(c["h"])(" - команда для создания нового приложения. ")]),Object(c["f"])("div",null,[Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("npm run serve")]),_:1}),Object(c["h"])(" - запустить сервер. ")]),Object(c["f"])("div",null,[m,Object(c["i"])(j,null,{header:Object(c["D"])(()=>[Object(c["h"])(" Переиспользование ")]),main:Object(c["D"])(()=>[Object(c["h"])(" На примере пустого проекта, годится для других "),Object(c["f"])("ul",null,[Object(c["f"])("li",null,[Object(c["h"])("Перейдите в папку где будет находиться проект "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("git clone https://github.com/NinetiesFiasco/empty-project new-project-name")]),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(" Зайдите внутрь папки с проектом и замените название в трёх файлах "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("package.json")]),_:1}),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("package-lock.json")]),_:1}),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("README.md")]),_:1}),Object(c["h"])(" измения стоит закомитить "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])('git commit -a -m"Rename project"')]),_:1})]),Object(c["f"])("li",null,[Object(c["h"])("Запустите "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("npm i")]),_:1}),Object(c["h"])(" для установки зависимостей")]),Object(c["f"])("li",null,[Object(c["h"])("Запустите "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("git remote remove origin")]),_:1}),Object(c["h"])(" для удаления привязанного репозитория на GitHub")]),v,g,_])]),_:1}),Object(c["i"])(j,null,{header:Object(c["D"])(()=>[Object(c["h"])(" Пустой проект ")]),main:Object(c["D"])(()=>[Object(c["f"])("ul",null,[Object(c["f"])("li",null,[Object(c["h"])("Перейдите в папку где будет находиться проект "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("vue create empty-project")]),_:1})]),y,D,w,x,G])]),_:1}),Object(c["i"])(j,null,{header:Object(c["D"])(()=>[Object(c["h"])(" Проект с роутером ")]),main:Object(c["D"])(()=>[Object(c["f"])("ul",null,[H,C,L,Object(c["f"])("li",null,[Object(c["h"])("Запустить "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("npm i vue-router")]),_:1})]),S,k,E,T,P])]),_:1}),Object(c["i"])(j,null,{header:Object(c["D"])(()=>[Object(c["h"])(" Проект со стором ")]),main:Object(c["D"])(()=>[Object(c["f"])("ul",null,[z,M,Object(c["f"])("li",null,[Object(c["h"])("Запустить "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("npm i vuex")]),_:1})]),I,V,N,A,F])]),_:1})])],64)}function U(e,t,l,n,i,b){return Object(c["s"])(),Object(c["e"])("section",null,[Object(c["f"])("header",{onClick:t[0]||(t[0]=(...e)=>b.toggle&&b.toggle(...e)),class:Object(c["o"])({active:i.isOpen})},[Object(c["y"])(e.$slots,"header",{},void 0,!0)],2),i.isOpen?(Object(c["s"])(),Object(c["e"])("main",{key:0,class:Object(c["o"])({absolutePos:l.absolute})},[Object(c["y"])(e.$slots,"main",{},void 0,!0)],2)):Object(c["d"])("",!0)])}var J={name:"Opener",props:{absolute:Boolean},data(){return{isOpen:!1}},methods:{toggle(){this.isOpen=!this.isOpen}}};l("0a30");const $=r()(J,[["render",U],["__scopeId","data-v-6b63e055"]]);var B=$;function W(e,t,l,n,i,b){return Object(c["s"])(),Object(c["e"])("span",{onClick:t[0]||(t[0]=(...e)=>b.copy&&b.copy(...e))},[Object(c["y"])(e.$slots,"default",{},void 0,!0)])}var q={name:"CodeLine",methods:{copy(e){navigator.clipboard.writeText(e.target.textContent)}}};l("410c");const K=r()(q,[["render",W],["__scopeId","data-v-1f9d7804"]]);var Q=K,X={name:"Vue",components:{CodeLine:Q,Opener:B}};const Y=r()(X,[["render",R]]);var Z=Y;const ee=Object(c["f"])("p",null," GIT - система контроля версий, он позволяет хранить свою работу в упорядоченном виде, создавать коробочку для каждого отдельного проекта, хранить историю и подключать к разработке других людей и работать с ними параллельно ",-1);function te(e,t,l,n,i,b){const u=Object(c["z"])("CodeLine");return Object(c["s"])(),Object(c["e"])(c["a"],null,[ee,Object(c["f"])("div",null,[Object(c["f"])("div",null,[Object(c["h"])("После инициализации проекта его стоит привязать к удалённому GIT репозиторию, у меня заведён аккаунт на GitHub, я создал там новый репозиторий с таким же названием "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("new-year-new-library")]),_:1}),Object(c["h"])(", сразу после создания GIT предложил связать его с локальным проектом при помощи следующих команд(в командной строке переходим в папку с проектом): "),Object(c["f"])("ul",null,[Object(c["f"])("li",null,[Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("git remote add origin repository-url")]),_:1}),Object(c["h"])(", где repository-url это url адрес репозитория, который выдал GitHub. ")]),Object(c["f"])("li",null,[Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("git branch -M master")]),_:1}),Object(c["h"])(" - не смог быстро найти что означает флаг -M, похоже что это указание главной ветки. ")]),Object(c["f"])("li",null,[Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("git push -u origin master")]),_:1}),Object(c["h"])(" - опубликовать локальные коммиты в удалённый репозиторий. ")])])])])],64)}var le={name:"Git",components:{CodeLine:Q}};const ce=r()(le,[["render",te]]);var ne=ce;const ie=Object(c["f"])("div",{class:"description"}," GitHub pages - позволяет публиковать свой программный код на сервере github. ",-1),be=Object(c["f"])("h3",null,"VUE",-1),ue=Object(c["f"])("div",null," Публикация VUE проекта на GitHub pages. ",-1),je=Object(c["f"])("br",null,null,-1),Oe=Object(c["f"])("br",null,null,-1),re=Object(c["f"])("pre",null,'module.exports = {\n  publicPath: process.env.NODE_ENV === "production" ? "/<repository_name>/" : "/",\n};\n                ',-1),oe=Object(c["f"])("div",null,"Обновление проекта на GitHub pages",-1);function ae(e,t,l,n,i,b){const u=Object(c["z"])("CodeLine"),j=Object(c["z"])("opener");return Object(c["s"])(),Object(c["e"])(c["a"],null,[ie,Object(c["f"])("div",null,[be,Object(c["i"])(j,null,{header:Object(c["D"])(()=>[Object(c["h"])(" CREATE ")]),main:Object(c["D"])(()=>[ue,Object(c["f"])("div",null,[Object(c["f"])("ul",null,[Object(c["f"])("li",null,[Object(c["h"])(" Так как GitHub pages создаёт postfix в url сайта, нужно сконфигурировать vue для работы с GitHub pages."),je,Object(c["h"])(" Создаём файл "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("vue.config.js")]),_:1}),Object(c["h"])(" в корне проекта со следующим содержимым"),Oe,Object(c["i"])(u,null,{default:Object(c["D"])(()=>[re]),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(" Далее создаём сборку проекта "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("npm run build")]),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(" Далее добавляем сборку в git (вероятно придётся удалить запись /dist из "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])(".gitignore")]),_:1}),Object(c["h"])(") ")]),Object(c["f"])("li",null,[Object(c["h"])(" И запускаем команду публикации "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("git subtree push --prefix dist origin gh-pages")]),_:1}),Object(c["h"])(" она создаст дополнительную ветку gh-pages в репозитории GitHub из локальной папки dist. Из неё же GitHub будет показывать сайт. ")])])])]),_:1}),Object(c["i"])(j,null,{header:Object(c["D"])(()=>[Object(c["h"])(" UPDATE ")]),main:Object(c["D"])(()=>[oe,Object(c["f"])("ul",null,[Object(c["f"])("li",null,[Object(c["h"])("Запустить сборку "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("npm run build")]),_:1})]),Object(c["f"])("li",null,[Object(c["h"])("Создать комит с новой сборкой "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])('git add -A && git commit -m"new build"')]),_:1}),Object(c["h"])(" найти аналог для Power Shell")]),Object(c["f"])("li",null,[Object(c["h"])("Опубликовать сборку "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("git subtree push --prefix dist origin gh-pages")]),_:1})])])]),_:1})])],64)}var fe={name:"GitHubPages",components:{Opener:B,CodeLine:Q}};const se=r()(fe,[["render",ae]]);var pe=se;const de=Object(c["f"])("p",null,"Как водится каждый раз начинаю писать новую библиотеку с кодом :-) посмотрим что выйдет на этот раз",-1),he=Object(c["f"])("p",null,"Идея в том что теперь будет множество раздвижных и всплывающих окон и множество ссылок на GIT с описанием использования.",-1),me=Object(c["f"])("p",null,"Описать скачивание и обновление библиотеки - очень важные штуки, хочу добиться того чтобы возвращение к проекту занимало минимум времени, особенно после смены языка",-1),ve=Object(c["f"])("div",null,[Object(c["h"])(" Буду считать это документацией моей жизненной позиции :-) главная задача грамотно скомпоновать данные и добиться следующих результатов: "),Object(c["f"])("ul",null,[Object(c["f"])("li",null," Возможность писать свой взгляд на описываемые объекты, давать краткий и развёрнутый комментарии, дать пользователю возможность обращаться к ним, редактировать, возможно обращаться к истории. Главная задача в голове дать пользователю что-то в духе обращения к краткой методичке, краткому комментарию и развёрнотому комментарию на выбор. "),Object(c["f"])("li",null," Сделать интуитивно понятную дизайн и вёрстку, постараться подогнать под разные девайсы. ")])],-1);function ge(e,t,l,n,i,b){const u=Object(c["z"])("CodeLine");return Object(c["s"])(),Object(c["e"])(c["a"],null,[de,he,Object(c["f"])("p",null,[Object(c["h"])("Проект находится в папке "),Object(c["i"])(u,null,{default:Object(c["D"])(()=>[Object(c["h"])("D:\\new-year-new-library")]),_:1})]),me,ve],64)}var _e={name:"CurrentLibrary",components:{CodeLine:Q}};const ye=r()(_e,[["render",ge]]);var De=ye;const we=Object(c["f"])("li",null,"Посмотреть по Ookla про интернет на месте, найти рейтинг провайдеров их тарифы и купить лучшие по прилёту (вероятно в аэропорту)",-1),xe=Object(c["f"])("li",null,"Взять с собой мультитул (пасатижы, отвёртки, канцелярская всячина)",-1),Ge=Object(c["f"])("li",null,"Для отеля (особенно в Азии) простые кухонные приборы",-1),He=Object(c["f"])("li",null,"Удлинитель/тройник",-1),Ce=[we,xe,Ge,He];function Le(e,t,l,n,i,b){return Object(c["s"])(),Object(c["e"])("ul",null,Ce)}var Se={name:"Traveling"};const ke=r()(Se,[["render",Le]]);var Ee=ke;const Te=Object(c["g"])("<li>&lt;article&gt;</li><li>&lt;aside&gt;</li><li>&lt;details&gt;</li><li>&lt;figcaption&gt;</li><li>&lt;figure&gt;</li><li>&lt;footer&gt;</li><li>&lt;header&gt;</li><li>&lt;main&gt;</li><li>&lt;mark&gt;</li><li>&lt;nav&gt;</li><li>&lt;section&gt;</li><li>&lt;summary&gt;</li><li>&lt;time&gt;</li>",13),Pe=[Te];function ze(e,t,l,n,i,b){return Object(c["s"])(),Object(c["e"])("ul",null,Pe)}var Me={name:"Html5"};const Ie=r()(Me,[["render",ze]]);var Ve=Ie;const Ne=[{path:"/",component:De},{path:"/vue",component:Z},{path:"/git",component:ne},{path:"/git-hub-pages",component:pe},{path:"/traveling",component:Ee},{path:"/html5",component:Ve}],Ae=Object(d["a"])({history:Object(d["b"])("/new-year-new-library/"),routes:Ne});var Fe=Ae;const Re=Object(c["c"])(p);Re.use(Fe),Re.mount("#app")},6994:function(e,t,l){"use strict";l("a6d8")},"85ba":function(e,t,l){},"8e5d":function(e,t,l){},a274:function(e,t,l){},a6d8:function(e,t,l){}});
//# sourceMappingURL=app.d9dba024.js.map