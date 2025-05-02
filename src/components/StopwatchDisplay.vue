<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ nTicks: number }>();

const hours = computed(() => Math.floor(props.nTicks / 3600));
const minutes = computed(() => Math.floor(props.nTicks / 60) % 60);
const seconds = computed(() => props.nTicks % 60);

const pad = (n: number) => n.toString().padStart(2, '0');
</script>

<template>
  <p>{{ hours }}:{{ pad(minutes) }}:{{ pad(seconds) }}</p>
</template>

<style scoped></style>
