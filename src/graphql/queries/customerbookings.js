import { gql } from "@apollo/client"

const CUSTOMER_BOOKINGS = gql`
query CustomerBookings($customerId: ID) {
  customerBookings(customerId: $customerId) {
    tx_ref
    payment
    total
  }
}
`;

export default CUSTOMER_BOOKINGS;