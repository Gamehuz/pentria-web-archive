import { gql } from "@apollo/client"

const ALL_SPACES = gql`
query Spaces {
  spaces {
    _id
    currency
    price
    image
    facilityType
    name
    location
    reviews {
      rating
    }
    createdAt
  }
}
`;

export default ALL_SPACES;