<script setup lang="ts">
import type { HistoryEntry } from '@/stores/trackingStore';
import { formatTicksAsTime } from '@/utils/timeUtils';

const props = defineProps<{ entry: HistoryEntry }>();
</script>

<template>
  <li>
    <p>{{ props.entry.sinkName }} &mdash; {{ formatTicksAsTime(props.entry.nSeconds, true) }}</p>
  </li>
</template>

<style scoped></style>
