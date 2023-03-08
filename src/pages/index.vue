<script lang="ts">
import TheInput from "@/components/TheInput.vue";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    TheInput,
  },
  setup() {
    const name = ref('name');
    const go = () => {};
    return {
      name,
      go,
    };
  },
});
</script>

<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
      >
        Vitesse Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button class="bg-red-500 p-2" :disabled="!name" @click="go">Go</button>
    </div>
  </div>
</template>
