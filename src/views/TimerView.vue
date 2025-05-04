<!-- Main View With Buttons -->
<script setup lang="ts">
import { ref } from 'vue';
import SinkButtons from '@/components/SinkButtons.vue';
import { useIntervalFn } from '@vueuse/core';
import { recordTick, totalTicks } from '@/stores/trackingStore.ts';
import StopwatchDisplay from '@/components/StopwatchDisplay.vue';
import HistoryDisplay from '@/components/HistoryDisplay.vue';
import { prefSinks } from '@/stores/preferencesStore';

const focusedSink = ref(prefSinks.value[0].name);

const onTick = () => {
  recordTick(focusedSink.value);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { pause, resume, isActive } = useIntervalFn(onTick, 1000);
</script>

<template>
  <SinkButtons :sinks="prefSinks" v-model="focusedSink" />
  <StopwatchDisplay :n-ticks="totalTicks" />
  <HistoryDisplay :max-entries="1"></HistoryDisplay>
</template>

<style scoped></style>
