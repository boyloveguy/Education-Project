<template>
  <section class="home-features">
    <h2 class="text-2xl font-bold mb-4">Home Features</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="feature-card p-4 border rounded shadow">
        <h3 class="text-xl font-semibold">Feature 1</h3>
        <p class="mt-2">Description of feature 1.</p>
      </div>
      <div class="feature-card p-4 border rounded shadow">
        <h3 class="text-xl font-semibold">Feature 2</h3>
        <p class="mt-2">Description of feature 2.</p>
      </div>
      <div class="feature-card p-4 border rounded shadow">
        <h3 class="text-xl font-semibold">Feature 3</h3>
        <p class="mt-2">Description of feature 3.</p>
      </div>
      <!-- Add more feature cards as needed -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeFeatures',
});
</script>

<style scoped>
.home-features {
  padding: 20px;
}
.feature-card {
  transition: transform 0.2s;
}
.feature-card:hover {
  transform: scale(1.05);
}
</style>