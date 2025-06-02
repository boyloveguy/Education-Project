<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/common/AppHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
  },
});
</script>

<style>
/* Global styles can be imported here if needed */
</style>
