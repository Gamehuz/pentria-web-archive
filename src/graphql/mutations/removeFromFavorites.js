import { gql } from "@apollo/client";
export const REMOVE_FROM_FAVORITES = gql`
  mutation RemoveFromFavourite($spaceId: String!) {
    removeFromFavourite(spaceId: $spaceId)
  }
`;
