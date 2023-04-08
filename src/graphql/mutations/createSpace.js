import { gql } from "@apollo/client";
export const CREATE_SPACE = gql`
  mutation EditUserInfo(
    $name: String!
    $image: [String!]!
    $location: String!
    $facilityType: String!
    $category: String!
    $beds: Int!
    $currency: Currency!
    $price: Float!
    $restRoome: Boolean!
    $pool: Boolean!
    $outdoorSpace: Boolean!
    $kitchen: Boolean!
    $ac: Boolean!
    $videoGames: Boolean!
    $petFriendly: Boolean!
    $cleaningSupplies: Boolean!
    $kidFriendly: Boolean!
    $workspace: Boolean!
    $wifi: Boolean!
    $parking: Boolean!
    $description: String!
    $policies: String!
  ) {
    createSpace(
      name: $name
      image: $image
      location: $location
      facilityType: $facilityType
      category: $category
      beds: $beds
      currency: $currency
      price: $price
      restRoome: $restRoome
      pool: $pool
      outdoorSpace: $outdoorSpace
      kitchen: $kitchen
      ac: $ac
      videoGames: $videoGames
      petFriendly: $petFriendly
      cleaningSupplies: $cleaningSupplies
      kidFriendly: $kidFriendly
      workspace: $workspace
      wifi: $wifi
      parking: $parking
      description: $description
      policies: $policies
    ) {
      _id
      ac
      activities {
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
      approved
      author {
        _id
        firstName
        lastName
      }
      beds
      category
      cleaningSupplies
      createdAt
      currency
      description
      facilityType
      image
      kidFriendly
      kitchen
      location
      name
      outdoorSpace
      parking
      petFriendly
      policies
      pool
      price
      restRoome
      reviews {
        _id
        comment
        createdAt
        rating
        updatedAt
        user
      }
      videoGames
      wifi
      updatedAt
      workspace
    }
  }
`;
