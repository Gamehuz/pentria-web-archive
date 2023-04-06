import { gql } from "@apollo/client";

export const CREATE_BOOKING = gql`
  mutation CreateBooking(
    $tickets: [ITicket!]!
    $spaceId: ID!
    $specialRequest: String!
    $status: Status!
    $discountPercentage: Float
    $initalAmount: Float
    $discountAmount: Float
    $total: Float
  ) {
    createBooking(
      tickets: $tickets
      spaceId: $spaceId
      specialRequest: $specialRequest
      status: $status
      discountPercentage: $discountPercentage
      initalAmount: $initalAmount
      discountAmount: $discountAmount
      total: $total
    ) {
      link
      status
      tx_ref
    }
  }
`;
