import { gql } from "@apollo/client";
export const GET_FAVORITE_SPACES = gql`
  query FavouriteSpace {
    user {
      favouriteSpace {
        _id
        image
        name
        location
        reviews {
          _id
          rating
        }
      }
    }
  }
`;
