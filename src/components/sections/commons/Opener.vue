<template>
  <section>
    <header
      @click="toggle"
      :class="{
        active: isOpen
      }"
    >
      <slot name="header"></slot>
    </header>
    <main
      v-if="isOpen"
      :class="{
        absolutePos: absolute
      }"
    >
      <slot name="main"></slot>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Opener',
  props: {
    absolute: Boolean
  },
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

<style scoped>
header {
  display: inline-block;
  border: 1px solid #333;
  cursor: pointer;
  padding: 3px 6px;
  margin: 0px 2px;
}
header:hover {
  background: #333;
}
header.active {
  background: purple;
}
.absolutePos {
  position: absolute;
  top: 100px;
  left: 100px;
  right: 100px;
  background: black;
}
</style>