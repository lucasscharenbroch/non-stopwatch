<script setup lang="ts">
import type { HistoryEntry } from '@/stores/TrackingStore';
import StopwatchDisplay from './StopwatchDisplay.vue';

const props = defineProps<{ entry: HistoryEntry }>();
</script>

<template>
  <li>
    <p>{{ props.entry.sinkName }} &mdash;</p>
    <StopwatchDisplay :n-ticks="props.entry.nSeconds" />
  </li>
</template>

<style scoped></style>
