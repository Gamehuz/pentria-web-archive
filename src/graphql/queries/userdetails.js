import { gql } from "@apollo/client";

const USER = gql`
  query User {
    user {
      _id
      firstName
      lastName
      address
      city
      state
      email
      dob
      accountType
      phone
    }
  }
`;

export default USER;
