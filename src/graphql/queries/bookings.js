import { gql } from "@apollo/client";

// const BOOKINGS = gql`

// `;

export const GET_RECEIPT = gql`
query($txRef: String) {
  booking(tx_ref: $txRef) {
    _id
    total
    status
    currency
    payment
    customer {
      firstName
      lastName
      phone
    }
    spaceId {
      _id
      name
      location

    }
    specialRequest
    tickets {
      name
      _id
      count
      date
      duration
      price
      time
    }
  }
}
`;




