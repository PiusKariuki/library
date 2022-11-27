import { createHttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core'

// create HTTP conn. to the API
const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:8000/graphql',
})

// cache implemantation
const cache = new InMemoryCache()

// create the Apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})


export default apolloClient