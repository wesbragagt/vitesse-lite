import gql from "graphql-tag";

export const GET_POKEMONS = gql`
query GetPokemons {
  pokemon_v2_pokemon {
    name
    id
  }
}`
