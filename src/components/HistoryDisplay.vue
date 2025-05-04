<script setup lang="ts">
import { history } from '@/stores/trackingStore';
import HistoryDisplayEntry from './HistoryDisplayEntry.vue';
</script>

<template>
  <ul>
    <HistoryDisplayEntry v-for="(entry, i) in history" :key="i" :entry />
  </ul>
</template>

<style scoped></style>
