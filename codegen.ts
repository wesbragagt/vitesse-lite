
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  documents: "src/graphql/*.gql.ts",
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true
      }
    }
  }
};

export default config;
