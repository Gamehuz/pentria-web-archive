import { gql } from "@apollo/client";

const GET_BANKS = gql`
query GetBanks {
  getBanks {
    code
    name
  }
}
`;

export default GET_BANKS;