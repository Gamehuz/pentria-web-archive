import { gql } from "@apollo/client";
export const CANCEL_BOOKING = gql`
  mutation CancleBooking($cancleBookingId: ID) {
    cancleBooking(id: $cancleBookingId) {
      _id
    }
  }
`;
