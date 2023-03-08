<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>

<template>
  <div>
    <p>Hi, {{ props.name }}</p>
    <p>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.back()">Back</button>
    </div>
  </div>
</template>
