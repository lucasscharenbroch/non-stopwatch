<script setup lang="ts">
import SessionChart from '@/components/dataVis/SessionChart.vue';
import { prefSinks } from '@/stores/preferencesStore';
import { history, totalTicks } from '@/stores/trackingStore';
</script>

<template>
  <div>
    <h1>Data</h1>
    <SessionChart :history :total-ticks :sinks="prefSinks" />
  </div>
</template>

<style scoped></style>
