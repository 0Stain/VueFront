<template>
<Header title="Test">
  <router-view></router-view>
</Header>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
