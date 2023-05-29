import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      ['https://graphql.datocms.com']: {
        headers: {
          Authorization: 'da00f87a179dc5e7c82434e66cc07a',
        }
      }
    }
  ],
  documents: ["src/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    './gql/':{
      preset: 'client',
      plugins: []
    }
  }
}

export default config