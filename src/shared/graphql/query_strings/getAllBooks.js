import gql from 'graphql-tag'

const getAllBooksQuery = gql`
  query GETALLBOOKS {
    books {
      title
      synopsis
      author{
        fname
        lname
      }
      photo
      primaryGenre{
        name
      }
      secondaryGenre{
        name
      }
    }
  }
`

export default getAllBooksQuery
