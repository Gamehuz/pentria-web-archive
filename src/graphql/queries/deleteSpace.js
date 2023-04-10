import { gql } from "@apollo/client";
export const DELETE_SPACE = gql`
  query deleteSpace($spaceId: ID) {
    deleteSpace(spaceId: $spaceId)
  }
`;
