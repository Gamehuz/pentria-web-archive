import { gql } from "@apollo/client";
export const VENDOR_SPACES = gql`
  query VendorListings {
    vendorListings {
      _id
      name
      image
      location
      reviews {
        _id
        rating
      }
    }
  }
`;
