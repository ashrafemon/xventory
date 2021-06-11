import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  concat,
} from "@apollo/client";

let token = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTk5NzE1NzUzNSIsImlkIjoiNjBhM2FjNGEyMmVmNmJkZDYzNTZmZjhhIiwidXNlcm5hbWUiOiIwMTk5NzE1NzUzNSIsInVzZXJfdHlwZSI6WyJTVVBFUl9BRE1JTiJdLCJzdGF0dXMiOiJBQ1RJVkUiLCJpc3MiOiJwcm9qZWN0eC1hZHZvY2F0ZS1tYW5hZ2VtZW50LXNvZnR3YXJlIiwiaWF0IjoxNjIzNDAyMDI3LCJleHAiOjE2MjM0ODg0Mjd9.5zQVI8jQn5stgEKc6NVJzwGgMTuo9aMngcS4RgnSFoioLuNgsL-UqFYzOWoskxlIAs1XY7bX6qy7jAVXDPWtMA`;

const httpLink = new HttpLink({ uri: "https://api.xattorney.app/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token,
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  // uri: "https://api.xattorney.app/graphql",
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
