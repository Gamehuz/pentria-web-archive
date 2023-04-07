import { gql } from "@apollo/client";

const EDIT_USER_ACCOUNT_INFO = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phone: String!
    $address: String!
    $city: String!
    $state: String!
  ) {
    editUserInfo(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
      address: $address
      city: $city
      state: $state
    ) {
      _id
    }
  }
`;

export default EDIT_USER_ACCOUNT_INFO;
