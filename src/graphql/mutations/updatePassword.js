import { gql } from "@apollo/client";

const UPDATE_PASSWORD = gql`
mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {
  updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
`;

export default UPDATE_PASSWORD;