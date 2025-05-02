<script setup lang="ts">
import { type Sink } from '../models/time.ts'
import SinkButton from './SinkButton.vue'

const props = defineProps<{ sinks: Sink[] }>()
const focusedSink = defineModel<string>()
</script>

<template>
  <section>
    <SinkButton
      v-for="(sink, i) in props.sinks"
      :sink
      :key="sink.name"
      :i
      :active="focusedSink === sink.name"
      @click="() => (focusedSink = sink.name)"
    ></SinkButton>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  gap: 1rem;
  padding: 1rem;
  height: 100%;
  box-sizing: border-box;
}
</style>
