<script setup lang="ts">
import type { Sink } from '@/models/sink';

const sink = defineModel<Sink>();
</script>

<template>
  <section>
    <label :for="`sink-name-${sink?.name}`">Name: </label>
    <input :id="`sink-name-${sink?.name}`" v-model="sink!.name" />

    <label :for="`sink-color-${sink?.name}`">Color: </label>
    <input :id="`sink-color-${sink?.name}`" type="color" v-model="sink!.colorHex" />
  </section>
</template>

<style scoped></style>
