import { gql } from "@apollo/client";
export const GET_FAVORITE_SPACES = gql`
  query FavouriteSpace {
    user {
      favouriteSpace {
        _id
        author {
          _id
          firstName
          lastName
          createdAt
        }
        createdAt
        description
        image
        name
        location
      }
    }
  }
`;
