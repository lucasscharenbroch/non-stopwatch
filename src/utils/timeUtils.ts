export function formatTicksAsTime(nTicks: number, includeSeconds: boolean = false): string {
  const hours = Math.floor(nTicks / 3600);
  const minutes = Math.floor(nTicks / 60) % 60;
  const seconds = nTicks % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return `${hours}:${pad(minutes)}` + (includeSeconds ? `:${pad(seconds)}` : '');
}
