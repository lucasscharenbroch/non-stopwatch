<script setup lang="ts">
import { formatSecondsAsTime, ticksToSeconds } from '@/utils/timeUtils';

const props = withDefaults(defineProps<{ nTicks: number; showSeconds?: boolean }>(), {
  showSeconds: true,
});
</script>

<template>
  <p>{{ formatSecondsAsTime(ticksToSeconds(props.nTicks), props.showSeconds) }}</p>
</template>

<style scoped></style>
