<template>
  <article>
    <h3>Have to know</h3>
    <template v-for="(item, key) in haveToKnow" :key="key">
      <code @click="copy">{{item}}</code><br>
    </template>
    <h3>Rare</h3>
    <template v-for="(item, key) in rare" :key="key">
      <code @click="copy">{{item}}</code><br>
    </template>
    <h3>not HTML5</h3>
    <template v-for="(item, key) in notHTML5" :key="key">
      <code @click="copy">{{item}}</code><br>
    </template>
  </article>
</template>

<script>
const haveToKnow = [
  'article', 'aside', 'details', 'summary', 'figcaption', 'figure',
  'footer', 'header', 'hgroup', 'main', 'mark', 'nav', 'section',
  'time', 'details', 'dialog', 'embed', 'mark', 'menuitem', 'svg', 'template'
]
const rare = [
  'audio', 'source', 'track', 'figure', 'figcaption',
  'keygen', 'meter', 'picture', 'progress', 'video', 'wbr',
  'bdi', 'data','datalist'
]
const notHTML5 = [
  'abbr', 'address', 'area', 'base', 'bdo',
  'blockquote', 'code', 'cite', 'dfn', 'ins',
  'menu', 'param', 'optgroup', 'small'
]

export default {
  name: 'Html5',
  data() {
    return {
      haveToKnow, rare, notHTML5
    }
  },
  methods: {
    copy(e) {
      const tag = e.target.textContent;
      navigator.clipboard.writeText(`<${tag}></${tag}>`);
    }
  }
}
</script>

<style scoped>
code {
  display: inline-block;
  margin: 3px;
  background: #333;
  padding: 0px 3px;
  border-radius: 3px;
  border: 1px solid #666;
  cursor: pointer;
}
code:active {
  color: purple;
}
</style>