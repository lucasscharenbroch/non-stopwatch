<!-- Main View With Buttons -->
<script setup lang="ts">
import { ref } from 'vue';
import SinkButtons from '@/components/SinkButtons.vue';
import { useIntervalFn } from '@vueuse/core';
import { recordTick, totalTicks } from '@/stores/trackingStore.ts';
import HistoryDisplay from '@/components/HistoryDisplay.vue';
import { prefMsPerTick, prefShowSeconds, prefSinks } from '@/stores/preferencesStore';
import StopwatchDisplay from '@/components/StopwatchDisplay.vue';

const focusedSink = ref(prefSinks.value[0].name);

const onTick = () => {
  recordTick(focusedSink.value);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { pause, resume, isActive } = useIntervalFn(onTick, prefMsPerTick.value);
</script>

<template>
  <SinkButtons style="height: 80vh" :sinks="prefSinks" v-model="focusedSink" />
  <StopwatchDisplay :n-ticks="totalTicks" :show-seconds="prefShowSeconds" />
  <HistoryDisplay :max-entries="1"></HistoryDisplay>
</template>

<style scoped></style>
