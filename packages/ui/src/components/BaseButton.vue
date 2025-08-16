<template>
  <button class="base_btn" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ disabled?: boolean }>()
const emit = defineEmits<{ click: [] }>()
function onClick() { if (!props.disabled) emit('click') }
</script>

<style scoped>
.base_btn { padding: 0.5rem 1rem; border: 0; border-radius: 0.5rem; cursor: pointer }
.base_btn:disabled { cursor: not-allowed; opacity: 0.6 }
</style>
