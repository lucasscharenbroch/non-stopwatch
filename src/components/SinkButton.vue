<script setup lang="ts">
import { DEFAULT_COLORS } from '@/utils/color.ts';
import { type Sink } from '../models/sink.ts';

const props = defineProps<{ sink: Sink; i: number; active: boolean }>();
const backgroundColor = props.sink.colorHex ?? DEFAULT_COLORS[props.i % DEFAULT_COLORS.length];
const style = { backgroundColor };
</script>

<template>
  <button :style :class="{ unfocus: !active }">{{ props.sink.name }}</button>
</template>

<style scoped>
button {
  aspect-ratio: 1 / 1;
  height: 1fr;
  font-size: 1.2rem;
  border: 2px solid #444;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

button.unfocus {
  filter: brightness(25%);
}

button:hover {
  transform: scale(1.05);
}

button.unfocus:hover {
  filter: brightness(75%);
}
</style>
