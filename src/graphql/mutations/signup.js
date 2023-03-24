import { gql } from "@apollo/client";

export const SIGNUP_GUEST = gql`
  mutation Register(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $address: String!
    $city: String!
    $state: String!
    $accountType: String!
  ) {
    register(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        address: $address
        city: $city
        state: $state
        accountType: $accountType
      }
    ) {
      _id
      firstName
      lastName
      email
      phone
      address
      city
      state
    }
  }
`;

export const SIGNUP_VENDOR = gql`
  mutation Register(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $address: String!
    $city: String!
    $state: String!
    $accountType: String!
    $bName: String!
    $bank: String!
    $bankName: String!
    $accountNumber: String!
    $accountName: String!
    $occupation: String!
  ) {
    register(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        address: $address
        city: $city
        state: $state
        accountType: $accountType
        bName: $bName
        bank: $bank
        bankName: $bankName
        accountNumber: $accountNumber
        accountName: $accountName
        occupation: $occupation
      }
    ) {
      _id
      firstName
      lastName
      email
      phone
      address
      city
      state
      bName
      bank
      bankName
      accountNumber
      accountName
      occupation
    }
  }
`;
