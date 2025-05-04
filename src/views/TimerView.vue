<!-- Main View With Buttons -->
<script setup lang="ts">
import { ref } from 'vue';
import { type Sink } from '../models/sink.ts';
import SinkButtons from '@/components/SinkButtons.vue';
import { useIntervalFn } from '@vueuse/core';
import { recordTick, totalTicks } from '@/stores/trackingStore.ts';
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
  <HistoryDisplay :max-entries="1"></HistoryDisplay>
</template>

<style scoped></style>
