<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AuthLayout',
}
</script>

<style scoped>
</style>