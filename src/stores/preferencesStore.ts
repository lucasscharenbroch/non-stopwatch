import type { Sink } from '@/models/sink';
import { DEFAULT_COLORS } from '@/utils/color';
import { ref } from 'vue';

// by default, only show seconds in dev
export const prefShowSeconds = ref<boolean>(import.meta.env.DEV);

export const prefSinks = ref<Sink[]>(
  ['AFK', 'Work', 'Play', 'Meetings', 'Coding', 'Ricing'].map((s, i) => ({
    name: s,
    colorHex: DEFAULT_COLORS[i % DEFAULT_COLORS.length],
  })),
);
