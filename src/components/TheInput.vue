<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: 'TheInput',
  setup(){
    const modelValue = ref('');
    return {
      modelValue
    } 
  }
})
</script>

<template>
  <input
    v-bind="$attrs"
    id="input"
    v-model="modelValue"
    type="text"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
  >
</template>
