import { gql } from "@apollo/client";

const VERIFY_BANKS = gql`
mutation VerifyBankAccount($accountNumber: String, $code: String) {
  verifyBankAccount(account_number: $accountNumber, code: $code) {
    account_name
    account_number
  }
}
`;

export default VERIFY_BANKS;