import { gql } from "@apollo/client";

export const EDIT_SPACE = gql`
  mutation EditSpace($input: SpaceInputs!) {
    editSpace(input: $input) {
      _id
    }
  }
`;
