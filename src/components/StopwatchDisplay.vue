<script setup lang="ts">
import { formatTicksAsTime } from '@/utils/timeUtils';

const props = withDefaults(defineProps<{ nTicks: number; showSeconds?: boolean }>(), {
  showSeconds: true,
});
</script>

<template>
  <p>{{ formatTicksAsTime(props.nTicks, props.showSeconds) }}</p>
</template>

<style scoped></style>
