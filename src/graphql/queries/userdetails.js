import { gql } from "@apollo/client";

const USER = gql`
  query User {
    user {
      firstName
      lastName
      address
      city
      state
      email
      accountType
      phone
    }
  }
`;

export default USER;
