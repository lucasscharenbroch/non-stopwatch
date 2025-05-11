<script setup lang="ts">
import { history, totalTicks } from '@/stores/trackingStore';
import HistoryDisplayEntry from './HistoryDisplayEntry.vue';
import { computed } from 'vue';
import _ from 'lodash';
import { formatSecondsAsTime } from '@/utils/timeUtils';
import { prefShowSeconds } from '@/stores/preferencesStore';

const props = defineProps<{ maxEntries: number }>();

const displayedHistoryEntries = computed(() =>
  history.value.slice(-1 * props.maxEntries).reverse(),
);
const collapsedHistoryEntries = computed(() =>
  history.value.slice(0, Math.max(0, history.value.length - props.maxEntries)).reverse(),
);

const collapsedTicks = computed(
  () => totalTicks.value - _.sum(displayedHistoryEntries.value.map((entry) => entry.nSeconds)),
);
</script>

<template>
  <ul>
    <HistoryDisplayEntry v-for="(entry, i) in displayedHistoryEntries" :key="i" :entry />
    <li>
      <details>
        <summary>
          (... and {{ formatSecondsAsTime(collapsedTicks, prefShowSeconds) }} more across
          {{ collapsedHistoryEntries.length }} entries)
        </summary>

        <ul>
          <HistoryDisplayEntry v-for="(entry, i) in collapsedHistoryEntries" :key="i" :entry />
        </ul>
      </details>
    </li>
  </ul>
</template>

<style scoped></style>
