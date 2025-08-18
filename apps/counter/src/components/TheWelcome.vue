<script setup lang="ts">
import { ref } from 'vue'
import { greet } from '@my-app/core-utils'
import { BaseButton } from '@my-app/ui'

const greeting = greet('Nathan')

const pressed = ref<boolean>(false)

const handleClick = () => {
  pressed.value = true

  setTimeout(() => {
    pressed.value = false
  }, 5000)
}
</script>

<template>
  <h1 v-if="pressed">{{ greeting }}</h1>

  <BaseButton @click="handleClick" :disabled="pressed"> Press me to say hello </BaseButton>
</template>
