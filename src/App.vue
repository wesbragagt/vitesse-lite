<script lang="ts">
import { defineComponent } from 'vue'
import TheFooter from '@/components/TheFooter.vue';
import {RouterView} from 'vue-router';

export default defineComponent({
  components:{
  TheFooter,
    RouterView
  },
  setup() {
    return {} 
  },
})
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <RouterView />
  </main>
</template>
