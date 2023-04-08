import { gql } from "@apollo/client";

export const ADD_ACTIVITY = gql`
  mutation AddActivity(
    $spaceId: ID!
    $image: String!
    $name: String!
    $currency: Currency!
    $price: Float!
    $duration: String!
  ) {
    addActivity(
      spaceId: $spaceId
      image: $image
      name: $name
      currency: $currency
      price: $price
      duration: $duration
    ) {
      _id
      currency
      duration
      image
      name
      price
      spaceId {
        _id
      }
    }
  }
`;
