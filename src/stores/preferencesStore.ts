import type { Sink } from '@/models/sink';
import { DEFAULT_COLORS } from '@/utils/color';
import { useLocalStorage } from '@vueuse/core';

// by default, only show seconds in dev
export const prefShowSeconds = useLocalStorage<boolean>('showSeconds', import.meta.env.DEV);

export const prefSinks = useLocalStorage<Sink[]>(
  'sinks',
  ['AFK', 'Work', 'Play', 'Meetings', 'Coding', 'Ricing'].map((s, i) => ({
    name: s,
    colorHex: DEFAULT_COLORS[i % DEFAULT_COLORS.length],
  })),
);
