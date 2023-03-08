import { gql } from "@apollo/client";
// example of the graphql query, all queries can be executed here
export const get_demo = gql`
  query {
    demo {
      id
      name
    }
  }
`;
