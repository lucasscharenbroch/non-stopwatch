<!-- Main View With Buttons -->
<script setup lang="ts">
import {type Sink} from '../models/time.ts'
import SinkButtons from '@/components/SinkButtons.vue';

const sinks: Sink[] = [
	"afk", "work", "play", "meeting", "coding", "ricing", "break"
].map(s => ({name: s}));

</script>

<template>
	<SinkButtons :sinks />
</template>

<style scoped>
</style>
