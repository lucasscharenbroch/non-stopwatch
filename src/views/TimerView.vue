<!-- Main View With Buttons -->
<script setup lang="ts">
import { ref } from 'vue';
import { type Sink } from '../models/Sink.ts';
import SinkButtons from '@/components/SinkButtons.vue';
import { useIntervalFn } from '@vueuse/core';
import { recordTick, totalTicks } from '@/stores/TrackingStore.ts';
import StopwatchDisplay from '@/components/StopwatchDisplay.vue';
import HistoryDisplay from '@/components/HistoryDisplay.vue';

const sinks: Sink[] = ['afk', 'work', 'play', 'meetings', 'coding', 'ricing'].map((s) => ({
  name: s,
}));

const focusedSink = ref(sinks[0].name);

const onTick = () => {
  recordTick(focusedSink.value);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { pause, resume, isActive } = useIntervalFn(onTick, 1000);
</script>

<template>
  <SinkButtons :sinks v-model="focusedSink" />
  <StopwatchDisplay :n-ticks="totalTicks" />
  <HistoryDisplay></HistoryDisplay>
</template>

<style scoped></style>
