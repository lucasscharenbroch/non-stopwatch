<!-- Main View With Buttons -->
<script setup lang="ts">
import { ref, watch } from 'vue';
import SinkButtons from '@/components/SinkButtons.vue';
import { useIntervalFn } from '@vueuse/core';
import {
  lastFocusedSink,
  lastUpdateTime,
  recordTicks,
  totalTicks,
} from '@/stores/trackingStore.ts';
import HistoryDisplay from '@/components/HistoryDisplay.vue';
import { prefMsPerTick, prefShowSeconds, prefSinks } from '@/stores/preferencesStore';
import StopwatchDisplay from '@/components/StopwatchDisplay.vue';

const focusedSink = ref(lastFocusedSink.value ?? prefSinks.value[0].name);

watch(focusedSink, () => {
  lastFocusedSink.value = focusedSink.value;
});

const update = () => {
  const now = Date.now();
  const msSinceLastUpdate = Date.now() - lastUpdateTime.value;
  lastUpdateTime.value = now;

  recordTicks(focusedSink.value, Math.floor(msSinceLastUpdate / prefMsPerTick.value));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { pause, resume, isActive } = useIntervalFn(update, prefMsPerTick.value);
</script>

<template>
  <SinkButtons style="height: 80vh" :sinks="prefSinks" v-model="focusedSink" />
  <StopwatchDisplay :n-ticks="totalTicks" :show-seconds="prefShowSeconds" />
  <HistoryDisplay :max-entries="1"></HistoryDisplay>
</template>

<style scoped></style>
