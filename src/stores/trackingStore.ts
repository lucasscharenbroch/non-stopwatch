import { ref } from 'vue';

export type HistoryEntry = {
  sinkName: string;
  nSeconds: number;
};

export const history = ref<Array<HistoryEntry>>([]);
export const totalTicks = ref<number>(0); // could be computed as sum of history, but this is "more efficient"

// Without changing the total tick count, update history so that its most recent
// sink is `sinkName`. Also remove any trailing no-tick entries.
export const setMostRecentSink = (sinkName: string) => {
  while (history.value.length !== 0 && history.value[history.value.length - 1].nSeconds === 0) {
    history.value.splice(-1);
  }

  if (history.value.length === 0 || history.value[history.value.length - 1].sinkName !== sinkName) {
    history.value.push({ sinkName, nSeconds: 0 });
  }
};

const addTicksToHistory = (sinkName: string, nTicks: number) => {
  setMostRecentSink(sinkName);
  history.value[history.value.length - 1].nSeconds += nTicks;
};

export const recordTicks = (sinkName: string, nTicks: number) => {
  totalTicks.value += nTicks;
  addTicksToHistory(sinkName, nTicks);
};

export const lastUpdateTime = ref(Date.now());

export const lastFocusedSink = ref<undefined | string>();
