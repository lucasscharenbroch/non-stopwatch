<script setup lang="ts">
import type { HistoryEntry } from '@/stores/trackingStore';
import { formatTicksAsTime } from '@/utils/timeUtils';
import { prefShowSeconds } from '@/stores/preferencesStore';

const props = defineProps<{ entry: HistoryEntry }>();
</script>

<template>
  <li>
    <p>
      {{ props.entry.sinkName }} &mdash;
      {{ formatTicksAsTime(props.entry.nSeconds, prefShowSeconds) }}
    </p>
  </li>
</template>

<style scoped></style>
