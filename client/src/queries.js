import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      title
      imageUrl
      description
      body
      createdBy {
        _id
      }
      likes
    }
  }
`;

/* User Queries */

/* Post Mutations */

/* User Mutations */
