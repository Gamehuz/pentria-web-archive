import { gql } from "@apollo/client";
export const CALCULATE_DISCOUNT = gql`
  mutation CalculateDiscount($tickets: [ITicket!]!) {
    calculateDiscount(tickets: $tickets) {
      discountPercentage
      initalAmount
      discountAmount
      total
    }
  }
`;
