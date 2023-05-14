<script setup lang="ts">
import { ref } from 'vue'
import { useMutation, useSubscription } from '@vue/apollo-composable'
import gql from 'graphql-tag';

const PING_MUTATION = gql`
mutation ping {
  ping {
    id
  }
}
`

const PONG_SUBSCRIPTION= gql`
subscription pong {
  pong {
    pingId
  }
}
`

const { mutate: ping } = useMutation(PING_MUTATION);
const { onResult, start: startSubscription, stop: stopSubscription }  = useSubscription(PONG_SUBSCRIPTION);

const subscriptionLoading = ref(false);
const handleRequestPing = () => {
  ping().then(() => {
    startSubscription();
    subscriptionLoading.value = true;
  }) 
}

const subResult = ref();

onResult((result: any) => {
  subResult.value = result
  stopSubscription();
  subscriptionLoading.value = false;
})
</script>
<template>
  <button class="bg-blue-500 rounded-md p-2 text-white" @click="handleRequestPing">{{subscriptionLoading === true ? 'Subscribed for changes...' : 'Ping'}}</button>
  <pre>{{JSON.stringify(subResult, undefined, 2)}}</pre>
</template>
