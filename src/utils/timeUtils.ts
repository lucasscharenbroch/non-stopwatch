import { prefMsPerTick } from '@/stores/preferencesStore';

export function formatSecondsAsTime(nSeconds: number, includeSeconds: boolean = false): string {
  const hours = Math.floor(nSeconds / 3600);
  const minutes = Math.floor(nSeconds / 60) % 60;
  const seconds = nSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return `${hours}:${pad(minutes)}` + (includeSeconds ? `:${pad(seconds)}` : '');
}

export function ticksToSeconds(nTicks: number): number {
  return (nTicks * prefMsPerTick.value) / 1000;
}
