<script setup lang="ts">
import { setMostRecentSink } from '@/stores/trackingStore.ts';
import { type Sink } from '../models/sink.ts';
import SinkButton from './SinkButton.vue';

const props = defineProps<{ sinks: Sink[] }>();
const focusedSink = defineModel<string>();
</script>

<template>
  <section>
    <SinkButton
      v-for="(sink, i) in props.sinks"
      :sink
      :key="sink.name"
      :i
      :active="focusedSink === sink.name"
      @click="
        () => {
          focusedSink = sink.name;
          setMostRecentSink(sink.name);
        }
      "
    ></SinkButton>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
  gap: 1rem;
  padding: 1rem;
  height: 100%;
  box-sizing: border-box;
}

@media (max-aspect-ratio: 2/3) {
  section {
    display: flex;
    flex-direction: column;
  }
}
</style>
