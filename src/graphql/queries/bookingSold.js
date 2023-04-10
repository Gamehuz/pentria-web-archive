import { gql } from "@apollo/client";
export const VENDOR_SOLD_BOOKINGS = gql`
  query BookingSold($vendorId: ID) {
    bookingSold(vendorId: $vendorId) {
      _id
      name
      author
      created
      amount
      bookingId
      status
      customer
    }
  }
`;
