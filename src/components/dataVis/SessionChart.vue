<script lang="ts" setup>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import { computed } from 'vue';
import { type HistoryEntry } from '@/stores/trackingStore';
import type { Sink } from '@/models/sink';

const props = defineProps<{ history: Array<HistoryEntry>; totalTicks: number; sinks: Sink[] }>();

const sinkNameToColor = (sinkName: string) =>
  props.sinks.find((sink) => sink.name === sinkName)?.colorHex ?? '#000000';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const chartData = computed(() => ({
  labels: ['Current Session'],
  datasets: props.history.map((entry) => ({
    label: entry.sinkName,
    data: [entry.nSeconds / 60],
    backgroundColor: sinkNameToColor(entry.sinkName),
    stack: 'time',
  })),
}));

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  indexAxis: 'y', // horizontal bar
  plugins: {
    legend: {
      labels: {
        generateLabels: () =>
          props.sinks.map((sink) => ({
            text: sink.name,
            fontColor: ChartJS.defaults.color.toString(),
            fillStyle: sinkNameToColor(sink.name),
            hidden: false,
          })),
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      max: props.totalTicks / 60,
      title: {
        display: true,
        text: 'Time (minutes)',
      },
    },
    y: {
      stacked: true,
    },
  },
};
</script>

<template>
  <div>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
