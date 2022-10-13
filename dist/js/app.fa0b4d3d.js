(function(d){function t(t){for(var e,i,o=t[0],c=t[1],v=t[2],s=0,l=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&l.push(n[i][0]),n[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(d[e]=c[e]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,v||[]),a()}function a(){for(var d,t=0;t<r.length;t++){for(var a=r[t],e=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(e=!1)}e&&(r.splice(t--,1),d=i(i.s=a[0]))}return d}var e={},n={app:0},r=[];function i(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return d[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=d,i.c=e,i.d=function(d,t,a){i.o(d,t)||Object.defineProperty(d,t,{enumerable:!0,get:a})},i.r=function(d){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},i.t=function(d,t){if(1&t&&(d=i(d)),8&t)return d;if(4&t&&"object"===typeof d&&d&&d.__esModule)return d;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:d}),2&t&&"string"!=typeof d)for(var e in d)i.d(a,e,function(t){return d[t]}.bind(null,e));return a},i.n=function(d){var t=d&&d.__esModule?function(){return d["default"]}:function(){return d};return i.d(t,"a",t),t},i.o=function(d,t){return Object.prototype.hasOwnProperty.call(d,t)},i.p="/new-year-new-library/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var v=0;v<o.length;v++)t(o[v]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(d,t,a){d.exports=a("56d7")},"56d7":function(d,t,a){"use strict";a.r(t);var e=a("7a23");const n={class:"application"};function r(d,t,a,r,i,o){const c=Object(e["h"])("Library");return Object(e["e"])(),Object(e["b"])("div",n,[Object(e["d"])(c)])}const i={id:"seredin-library"},o=Object(e["c"])('<div data-v-06d6d952><h1 data-v-06d6d952>Библиотека программиста</h1><p data-v-06d6d952>Как водится каждый раз начинаю писать новую библиотеку с кодом :-) посмотрим что выйдет на этот раз</p><p data-v-06d6d952>Идея в том что теперь будет множество раздвижных и всплывающих окон и множество ссылок на GIT с описанием использования.</p><div data-v-06d6d952> Буду считать это документацией моей жизненной позиции :-) главная задача грамотно скомпоновать данные и добиться следующих результатов: <ul data-v-06d6d952><li data-v-06d6d952> Возможность писать свой взгляд на описываемые объекты, давать краткий и развёрнутый комментарии, дать пользователю возможность обращаться к ним, редактировать, возможно обращаться к истории. Главная задача в голове дать пользователю что-то в духе обращения к краткой методичке, краткому комментарию и развёрнотому комментарию на выбор. </li><li data-v-06d6d952> Сделать интуитивно понятную дизайн и вёрстку, постараться подогнать под разные девайсы. </li></ul></div></div><div data-v-06d6d952><h2 data-v-06d6d952>VUE</h2><div data-v-06d6d952> VUE - JS фреймворк для компонентной разработки, позволяет разделять jS, CSS и HTML относящиеся к отдельному блоку по отдельным файлам. </div><div data-v-06d6d952><span class="code" data-v-06d6d952>vue create project-name</span> - команда для создания нового приложения. </div></div><div data-v-06d6d952><h2 data-v-06d6d952>GIT</h2><p data-v-06d6d952> GIT - система контроля версий, он позволяет хранить свою работу в упорядоченном виде, создавать коробочку для каждого отдельного проекта, хранить историю и подключать к разработке других людей и работать с ними параллельно </p><div data-v-06d6d952><div data-v-06d6d952>После инициализации проекта его стоит привязать к удалённому GIT репозиторию, у меня заведён аккаунт на GitHub, я создал там новый репозиторий с таким же названием <span class="code" data-v-06d6d952>new-year-new-library</span>, сразу после создания GIT предложил связать его с локальным проектом при помощи следующих команд(в командной строке переходим в папку с проектом): <ul data-v-06d6d952><li data-v-06d6d952><span class="code" data-v-06d6d952>git remote add origin repository-url</span>, где repository-url это url адрес репозитория, который выдал GitHub. </li><li data-v-06d6d952><span class="code" data-v-06d6d952>git branch -M master</span> - не смог быстро найти что означает флаг -M, похоже что это указание главной ветки. </li><li data-v-06d6d952><span class="code" data-v-06d6d952>git push -u origin master</span> - опубликовать локальные коммиты в удалённый репозиторий. </li></ul></div></div><div data-v-06d6d952><h2 data-v-06d6d952>GitHub pages</h2><div class="description" data-v-06d6d952> GitHub pages - позволяет публиковать свой программный код на сервере github. </div><div data-v-06d6d952></div></div></div>',3),c=[o];function v(d,t,a,n,r,o){return Object(e["e"])(),Object(e["b"])("div",i,c)}var u={name:"HelloWorld"},s=(a("f81c"),a("6b0d")),l=a.n(s);const p=l()(u,[["render",v],["__scopeId","data-v-06d6d952"]]);var f=p,b={name:"App",components:{Library:f}};a("6994");const h=l()(b,[["render",r]]);var y=h;Object(e["a"])(y).mount("#app")},"650b":function(d,t,a){},6994:function(d,t,a){"use strict";a("a6d8")},a6d8:function(d,t,a){},f81c:function(d,t,a){"use strict";a("650b")}});
//# sourceMappingURL=app.fa0b4d3d.js.map