import { createApp, h, provide } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import App from "./App.vue";
import "./styles/main.css";
import { createStore } from "vuex";
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// New Imports
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { DefaultApolloClient } from "@vue/apollo-composable";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3001/graphql',
})

// Create the subscription websocket link
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:3001/graphql',
  options: {
    reconnect: true,
  },
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)


// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache,
})

const app = createApp({
  setup(){
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
});

const store = createStore({
  state(){
    return {
      count: 0
    }
  },
  mutations: {
    increment(state){
      state.count++;
    }
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

app.use(store);
app.use(router);
app.mount("#app");
