(function(e){function t(t){for(var c,l,i=t[0],o=t[1],u=t[2],O=0,s=[];O<i.length;O++)l=i[O],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&s.push(r[l][0]),r[l]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);a&&a(t);while(s.length)s.shift()();return b.push.apply(b,u||[]),n()}function n(){for(var e,t=0;t<b.length;t++){for(var n=b[t],c=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(c=!1)}c&&(b.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},r={app:0},b=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/new-year-new-library/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var a=o;b.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a30":function(e,t,n){"use strict";n("85ba")},"410c":function(e,t,n){"use strict";n("a274")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const r={class:"application"};function b(e,t,n,b,l,i){const o=Object(c["m"])("Library");return Object(c["i"])(),Object(c["d"])("div",r,[Object(c["g"])(o)])}const l={id:"seredin-library"},i={class:"chapters"};function o(e,t,n,r,b,o){const u=Object(c["m"])("CurrentLibrary"),a=Object(c["m"])("Vue"),O=Object(c["m"])("Git"),s=Object(c["m"])("GitHubPages"),j=Object(c["m"])("Traveling");return Object(c["i"])(),Object(c["d"])("div",l,[Object(c["g"])(u),Object(c["e"])("div",i,[Object(c["g"])(a),Object(c["g"])(O),Object(c["g"])(s),Object(c["g"])(j)])])}const u=Object(c["e"])("div",null," VUE - JS фреймворк для компонентной разработки, позволяет разделять jS, CSS и HTML относящиеся к отдельному блоку по отдельным файлам. ",-1),a=Object(c["e"])("div",null,[Object(c["e"])("span",{class:"code"},"vue create project-name"),Object(c["f"])(" - команда для создания нового приложения. ")],-1);function O(e,t,n,r,b,l){const i=Object(c["m"])("opener");return Object(c["i"])(),Object(c["b"])(i,{absolute:""},{header:Object(c["n"])(()=>[Object(c["f"])(" VUE ")]),main:Object(c["n"])(()=>[u,a]),_:1})}function s(e,t,n,r,b,l){return Object(c["i"])(),Object(c["d"])("section",null,[Object(c["e"])("header",{onClick:t[0]||(t[0]=(...e)=>l.toggle&&l.toggle(...e)),class:Object(c["h"])({active:b.isOpen})},[Object(c["l"])(e.$slots,"header",{},void 0,!0)],2),b.isOpen?(Object(c["i"])(),Object(c["d"])("main",{key:0,class:Object(c["h"])({absolutePos:n.absolute})},[Object(c["l"])(e.$slots,"main",{},void 0,!0)],2)):Object(c["c"])("",!0)])}var j={name:"Opener",props:{absolute:Boolean},data(){return{isOpen:!1}},methods:{toggle(){this.isOpen=!this.isOpen}}},p=(n("0a30"),n("6b0d")),d=n.n(p);const f=d()(j,[["render",s],["__scopeId","data-v-6b63e055"]]);var g=f;function v(e,t,n,r,b,l){return Object(c["i"])(),Object(c["d"])("span",{onClick:t[0]||(t[0]=(...e)=>l.copy&&l.copy(...e))},[Object(c["l"])(e.$slots,"default",{},void 0,!0)])}var m={name:"CodeLine",methods:{copy(e){navigator.clipboard.writeText(e.target.textContent)}}};n("410c");const h=d()(m,[["render",v],["__scopeId","data-v-1f9d7804"]]);var y=h,_={name:"Vue",components:{Opener:g}};const G=d()(_,[["render",O]]);var w=G;const H=Object(c["e"])("p",null," GIT - система контроля версий, он позволяет хранить свою работу в упорядоченном виде, создавать коробочку для каждого отдельного проекта, хранить историю и подключать к разработке других людей и работать с ними параллельно ",-1);function T(e,t,n,r,b,l){const i=Object(c["m"])("CodeLine"),o=Object(c["m"])("opener");return Object(c["i"])(),Object(c["b"])(o,{absolute:""},{header:Object(c["n"])(()=>[Object(c["f"])(" GIT ")]),main:Object(c["n"])(()=>[H,Object(c["e"])("div",null,[Object(c["e"])("div",null,[Object(c["f"])("После инициализации проекта его стоит привязать к удалённому GIT репозиторию, у меня заведён аккаунт на GitHub, я создал там новый репозиторий с таким же названием "),Object(c["g"])(i,null,{default:Object(c["n"])(()=>[Object(c["f"])("new-year-new-library")]),_:1}),Object(c["f"])(", сразу после создания GIT предложил связать его с локальным проектом при помощи следующих команд(в командной строке переходим в папку с проектом): "),Object(c["e"])("ul",null,[Object(c["e"])("li",null,[Object(c["g"])(i,null,{default:Object(c["n"])(()=>[Object(c["f"])("git remote add origin repository-url")]),_:1}),Object(c["f"])(", где repository-url это url адрес репозитория, который выдал GitHub. ")]),Object(c["e"])("li",null,[Object(c["g"])(i,null,{default:Object(c["n"])(()=>[Object(c["f"])("git branch -M master")]),_:1}),Object(c["f"])(" - не смог быстро найти что означает флаг -M, похоже что это указание главной ветки. ")]),Object(c["e"])("li",null,[Object(c["g"])(i,null,{default:Object(c["n"])(()=>[Object(c["f"])("git push -u origin master")]),_:1}),Object(c["f"])(" - опубликовать локальные коммиты в удалённый репозиторий. ")])])])])]),_:1})}var P={name:"Git",components:{Opener:g,CodeLine:y}};const x=d()(P,[["render",T]]);var C=x;const E=Object(c["e"])("div",{class:"description"}," GitHub pages - позволяет публиковать свой программный код на сервере github. ",-1),L=Object(c["e"])("h3",null,"VUE",-1),S=Object(c["e"])("div",null," Публикация VUE проекта на GitHub pages. ",-1),I=Object(c["e"])("div",null,[Object(c["e"])("ul",null,[Object(c["e"])("li",null,[Object(c["f"])(" Так как GitHub pages создаёт postfix в url сайта, нужно сконфигурировать vue для работы с GitHub pages."),Object(c["e"])("br"),Object(c["f"])(" Создаём файл "),Object(c["e"])("span",{class:"code"},"vue.config.js"),Object(c["f"])(" в корне проекта со следующим содержимым"),Object(c["e"])("br"),Object(c["e"])("span",{class:"code"},[Object(c["e"])("pre",null,'    module.exports = {\n      publicPath: process.env.NODE_ENV === "production" ? "/<repository_name>/" : "/",\n    };\n                    ')])]),Object(c["e"])("li",null,[Object(c["f"])(" Далее создаём сборку проекта "),Object(c["e"])("span",{class:"code"},"npm run build")]),Object(c["e"])("li",null,[Object(c["f"])(" Далее добавляем сборку в git (вероятно придётся удалить запись /dist из "),Object(c["e"])("span",{class:"code"},".gitignore"),Object(c["f"])(") ")]),Object(c["e"])("li",null,[Object(c["f"])(" И запускаем команду публикации "),Object(c["e"])("span",{class:"code"},"git subtree push --prefix dist origin gh-pages"),Object(c["f"])(" она создаст дополнительную ветку gh-pages в репозитории GitHub из локальной папки dist. Из неё же GitHub будет показывать сайт. ")])])],-1),V=Object(c["e"])("div",null,"Обновление проекта на GitHub pages",-1),k=Object(c["e"])("ul",null,[Object(c["e"])("li",null,[Object(c["f"])("Запустить сборку "),Object(c["e"])("span",{class:"code"},"npm run build")]),Object(c["e"])("li",null,"Создать комит с новой сборкой ??? не точно"),Object(c["e"])("li",null,[Object(c["f"])("Опубликовать сборку "),Object(c["e"])("span",{class:"code"},"git subtree push --prefix dist origin gh-pages")])],-1);function M(e,t,n,r,b,l){const i=Object(c["m"])("opener");return Object(c["i"])(),Object(c["b"])(i,{absolute:""},{header:Object(c["n"])(()=>[Object(c["f"])(" GitHub pages ")]),main:Object(c["n"])(()=>[E,Object(c["e"])("div",null,[L,Object(c["g"])(i,null,{header:Object(c["n"])(()=>[Object(c["f"])(" CREATE ")]),main:Object(c["n"])(()=>[S,I]),_:1}),Object(c["g"])(i,null,{header:Object(c["n"])(()=>[Object(c["f"])(" UPDATE ")]),main:Object(c["n"])(()=>[V,k]),_:1})])]),_:1})}var U={name:"GitHubPages",components:{Opener:g}};const A=d()(U,[["render",M]]);var J=A;const $=Object(c["e"])("p",null,"Как водится каждый раз начинаю писать новую библиотеку с кодом :-) посмотрим что выйдет на этот раз",-1),D=Object(c["e"])("p",null,"Идея в том что теперь будет множество раздвижных и всплывающих окон и множество ссылок на GIT с описанием использования.",-1),N=Object(c["e"])("div",null,[Object(c["f"])(" Буду считать это документацией моей жизненной позиции :-) главная задача грамотно скомпоновать данные и добиться следующих результатов: "),Object(c["e"])("ul",null,[Object(c["e"])("li",null," Возможность писать свой взгляд на описываемые объекты, давать краткий и развёрнутый комментарии, дать пользователю возможность обращаться к ним, редактировать, возможно обращаться к истории. Главная задача в голове дать пользователю что-то в духе обращения к краткой методичке, краткому комментарию и развёрнотому комментарию на выбор. "),Object(c["e"])("li",null," Сделать интуитивно понятную дизайн и вёрстку, постараться подогнать под разные девайсы. ")])],-1);function B(e,t,n,r,b,l){const i=Object(c["m"])("opener");return Object(c["i"])(),Object(c["b"])(i,null,{header:Object(c["n"])(()=>[Object(c["f"])(" Библиотека программиста ")]),main:Object(c["n"])(()=>[$,D,N]),_:1})}var R={name:"CurrentLibrary",components:{Opener:g}};const W=d()(R,[["render",B]]);var q=W;const z=Object(c["e"])("ul",null,[Object(c["e"])("li",null,"Посмотреть по Ookla про интернет на месте, найти рейтинг провайдеров их тарифы и купить лучшие по прилёту (вероятно в аэропорту)"),Object(c["e"])("li",null,"Взять с собой мультитул (пасатижы, отвёртки, канцелярская всячина)"),Object(c["e"])("li",null,"Для отеля (особенно в Азии) простые кухонные приборы")],-1);function F(e,t,n,r,b,l){const i=Object(c["m"])("opener");return Object(c["i"])(),Object(c["b"])(i,{absolute:""},{header:Object(c["n"])(()=>[Object(c["f"])(" Путешествия ")]),main:Object(c["n"])(()=>[z]),_:1})}var K={name:"Traveling",components:{Opener:g}};const Q=d()(K,[["render",F]]);var X=Q,Y={name:"HelloWorld",components:{CurrentLibrary:q,Vue:w,Git:C,GitHubPages:J,Traveling:X}};n("a7c0");const Z=d()(Y,[["render",o],["__scopeId","data-v-6b50d9f3"]]);var ee=Z,te={name:"App",components:{Library:ee}};n("6994");const ne=d()(te,[["render",b]]);var ce=ne;Object(c["a"])(ce).mount("#app")},6994:function(e,t,n){"use strict";n("a6d8")},"85ba":function(e,t,n){},a274:function(e,t,n){},a6d8:function(e,t,n){},a7c0:function(e,t,n){"use strict";n("b024")},b024:function(e,t,n){}});
//# sourceMappingURL=app.5460199f.js.map