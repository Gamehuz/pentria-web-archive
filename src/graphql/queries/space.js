import { gql } from "@apollo/client";

// export const GET_SPACE = gql`

export const GET_SPACE = gql`
  query getSpace($spaceId: ID!) {
    space(spaceId: $spaceId) {
      ac
      activities {
        _id
        currency
        duration
        image
        name
        price
      }
      location
      beds
      category
      cleaningSupplies
      currency
      description
      facilityType
      image
      kidFriendly
      kitchen
      name
      outdoorSpace
      parking
      petFriendly
      policies
      pool
      price
      reviews {
        _id
        comment
        createdAt
        rating
        user
      }
      videoGames
      wifi
      workspace
      _id
    }
  }
`;
