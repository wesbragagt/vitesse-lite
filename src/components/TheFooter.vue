<script lang="ts">
import { defineComponent } from 'vue'
import {toggleDark} from '@/composables/dark'
export default defineComponent({
 name: 'TheFooter' ,
  setup(){
    return {
    toggleDark
  }
  }
})
</script>
<template>
  <nav>
    <button @click="toggleDark()">
      toggle dark
    </button>

    <a
      class="text-red-500" 
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
