<script setup lang="ts">
import SinkEditor from '@/components/config/SinkEditor.vue';
import { prefMsPerTick, prefShowSeconds, prefSinks } from '@/stores/preferencesStore';
</script>

<template>
  <h1>Config</h1>

  <input id="showSeconds" type="checkbox" v-model="prefShowSeconds" />
  <label for="showSeconds">Show Seconds</label>

  <br />

  <label for="msPerTick">Milliseconds Per update </label>
  <input id="msPerTick" v-model="prefMsPerTick" />

  <SinkEditor v-model="prefSinks" />
</template>

<style scoped></style>
