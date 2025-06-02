<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/common/AppHeader.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    AppHeader,
  },
});
</script>

<style scoped>
/* Add any specific styles for the DefaultLayout here */
</style>