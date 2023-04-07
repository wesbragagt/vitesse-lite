<script lang="ts">
import TheInput from "@/components/TheInput.vue";
import { ref, defineComponent } from "vue";
import { useStore } from "vuex";
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default defineComponent({
  name: "IndexPage",
  components: {
    TheInput,
  },
  setup() {
    const { result: pokemons } = useQuery(gql`
query{
  pokemon_v2_pokemon {
    name
    id
  }
}
`)
    const store = useStore();
    const name = ref('name');
    const go = () => {};
    const increment = () => {
      store.commit('increment');
    }
    return {
      increment,
      name,
      go,
      storeState: store.state,
      pokemons,
    };
  },
});
</script>

<template>
  <div>
    <div/>
    <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />
    <div>
      <button class="bg-red-500 p-2" :disabled="!name" @click="increment">Increment</button>
    </div>
    <h2>Testing Vuex Store</h2>
  <pre>
    {{JSON.stringify(storeState, undefined, 2)}}
  </pre>
    <h2>Testing Graphql Apollo</h2>
    <pre>{{JSON.stringify(pokemons, undefined, 2)}}</pre>
  </div>
</template>
<style>
* {
  @apply text-black;
}
</style>
