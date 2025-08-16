<template>
  <div style="padding: 24px">
    <h1>UI Playground</h1>
    <BaseButton @click="clicked = !clicked">Click me</BaseButton>
    <p v-if="clicked">Toggled</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton } from '../src'

const clicked = ref(false)
</script>
