import { gql } from "@apollo/client";
export const WALLET_BALANCE = gql`
  query vendorWalletBalance {
    walletBalance
  }
`;
