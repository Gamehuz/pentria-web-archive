import { gql } from "@apollo/client";

const ADD_TO_FAVORITES = gql`
mutation AddToFavourite($spaceId: String!) {
  addToFavourite(spaceId: $spaceId)
}
`;

export default ADD_TO_FAVORITES;