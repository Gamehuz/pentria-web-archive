import { gql } from "@apollo/client";
export const ADD_REVIEW = gql`
  mutation sendReview($spaceId: ID!, $comment: String!, $rating: Int!) {
    sendReview(spaceId: $spaceId, comment: $comment, rating: $rating) {
      _id
      comment
      rating
      user
    }
  }
`;
