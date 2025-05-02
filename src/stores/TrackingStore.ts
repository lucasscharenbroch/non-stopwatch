import { ref } from 'vue';

export type HistoryEntry = {
  sinkName: string;
  nSeconds: number;
};

export const history = ref<Array<HistoryEntry>>([]);
export const totalTicks = ref<number>(3590); // could be computed as sum of history, but this is "more efficient"

const addTickToHistory = (sinkName: string) => {
  if (history.value.length !== 0 && history.value[history.value.length - 1].sinkName === sinkName) {
    history.value[history.value.length - 1].nSeconds++;
  } else {
    history.value.push({ sinkName, nSeconds: 1 });
  }
};

export const recordTick = (sinkName: string) => {
  totalTicks.value++;
  addTickToHistory(sinkName);
};
