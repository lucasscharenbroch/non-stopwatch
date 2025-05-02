<script setup lang="ts">
import { DEFAULT_COLORS } from '@/utils/color.ts';
import { type Sink } from '../models/time.ts'

const props = defineProps<{sink: Sink, i: number}>();
const backgroundColor =
props.sink.colorHex ?? DEFAULT_COLORS[props.i % DEFAULT_COLORS.length];
const style = {backgroundColor};

</script>

<template>
    <button :style>{{ props.sink.name }}</button>
</template>

<style scoped>
button {
  aspect-ratio: 1 / 1;
  width: 100%;
  font-size: 1.2rem;
  border: 2px solid #444;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
    transform: scale(1.05);
    filter: brightness(75%);
}
</style>