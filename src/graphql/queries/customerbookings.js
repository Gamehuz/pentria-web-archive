import { gql } from "@apollo/client";

const CUSTOMER_BOOKINGS = gql`
  query CustomerBookings($customerId: ID, $page: Int, $limit: Int) {
    customerBookings(customerId: $customerId, page: $page, limit: $limit) {
      _id
      spaceId {
        _id
        image
        name
        location
        price
        createdAt

        reviews {
          rating
        }
      }
      tickets {
        _id
      }
      tx_ref
      status
      currency
      total
    }
  }
`;

export default CUSTOMER_BOOKINGS;
