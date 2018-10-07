<template>
  <div>
    <v-container>
      <h1>Home</h1>
      <ul v-for="post in getPosts" :key="post.id">
        <li>
          {{ post.title }}
        </li>
        <li>
          {{ post.imageUrl }}
        </li>
        <li>
          {{ post.description }}
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { gql } from "apollo-boost";

export default {
  name: "Home",
  updated() {
    console.log(this.getPosts);
  },
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            title
            imageUrl
            description
            likes
          }
        }
      `
    }
  }
};
</script>
