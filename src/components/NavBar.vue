<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = router.getRoutes();

</script>

<template>
  <nav>
    <RouterLink v-for="route in routes" :key="route.name" :to="route.path">{{ route.meta.title }}</RouterLink>
	</nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>