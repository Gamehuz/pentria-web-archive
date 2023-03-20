import { gql } from "@apollo/client";

export const GET_SPACES = gql `
  query {
  spaces {
    _id
    image
    ac
    price
    currency
    activities {
      _id
      currency
      duration
      image
      name
      price
    }
    approved
    author {
      _id
      accountType
      acctNumber
    }
    beds
    category
    cleaningSupplies
    createdAt
    description
    facilityType
    kidFriendly
    kitchen
    location
    name
    outdoorSpace
    parking
    petFriendly
    policies
    pool
    reviews {
      _id
      comment
      rating
      createdAt
      user
    }
    updatedAt
    videoGames
    wifi
    workspace
  }
}
`