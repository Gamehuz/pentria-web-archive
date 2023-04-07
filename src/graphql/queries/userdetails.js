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
    phone
  }
}
`;

export default USER;
