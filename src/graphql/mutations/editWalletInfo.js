import { gql } from "@apollo/client";

const EDIT_WALLET_INFO = gql`
mutation EditUserInfo($bankCode: String, $acctNumber: String, $bank: String, $bName: String) {
    editUserInfo(bankCode: $bankCode, acctNumber: $acctNumber, bank: $bank,  bName: $bName) {
      _id
    }
  }
`;

export default EDIT_WALLET_INFO;