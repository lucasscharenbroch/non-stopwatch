<!-- Main View With Buttons -->
<script setup lang="ts">
import { ref } from 'vue';
import {type Sink} from '../models/time.ts'
import SinkButtons from '@/components/SinkButtons.vue';

const sinks: Sink[] = [
	"afk", "work", "play", "meetings", "coding", "ricing"
].map(s => ({name: s}));

const focusedSink = ref(sinks[0].name)

</script>

<template>
	<SinkButtons :sinks v-model="focusedSink"/>
</template>

<style scoped>
</style>
