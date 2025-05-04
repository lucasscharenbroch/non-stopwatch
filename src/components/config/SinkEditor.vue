<script setup lang="ts">
import type { Sink } from '@/models/sink';
import SinkEditorEntry from './SinkEditorEntry.vue';

const sinks = defineModel<Sink[]>();
</script>

<template>
  <section>
    <SinkEditorEntry v-for="(sink, i) in sinks" :key="i" v-model="sinks![i]"></SinkEditorEntry>
    <button @click="() => sinks?.push({ name: '', colorHex: '#ffffff' })">Add Sink</button>
  </section>
</template>

<style scoped></style>
