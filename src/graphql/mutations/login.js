import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      token
      accountType
    }
  }
`;

export default LOGIN_USER;
