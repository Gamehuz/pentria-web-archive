import { gql } from "@apollo/client";

const LoginMutation = gql`
    mutation($email: String!, $password: String!)  {
    login(email: $email, password: $password) {
        _id
        token
        accountType
  }
}`;

export default LoginMutation;