import gql from 'graphql-tag'

const getAllGenresString = gql`
  query GETGENRES {
    genres {
      name
    }
  }
`

export default getAllGenresString
