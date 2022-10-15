<template>
  <span @click="copy">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'CodeLine',
  methods: {
    copy(e) {
      navigator.clipboard.writeText(e.target.textContent);
    }
  }
}
</script>

<style scoped>
span {
  background: #333;
  display: inline-block;
  padding: 0px 3px;
  border-radius: 3px;
  border: 1px solid #666;
  cursor: pointer;
}
span:active {
  color: purple;
}
</style>