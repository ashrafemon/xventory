import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  concat,
} from "@apollo/client";

let token = {
  admin: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTk5NzE1NzUzNSIsImlkIjoiNjBhM2FjNGEyMmVmNmJkZDYzNTZmZjhhIiwidXNlcm5hbWUiOiIwMTk5NzE1NzUzNSIsInVzZXJfdHlwZSI6WyJTVVBFUl9BRE1JTiJdLCJzdGF0dXMiOiJBQ1RJVkUiLCJpc3MiOiJwcm9qZWN0eC1hZHZvY2F0ZS1tYW5hZ2VtZW50LXNvZnR3YXJlIiwiaWF0IjoxNjIzNDg4NTUyLCJleHAiOjE2MjM1NzQ5NTJ9.j8ai8PPVqjf7zQGW-TgDiYWWr_xHrkezY7AERWhgXEpFT0-6Uv6dRRaEDHt_iXxZHMNO0v6c2tSPvdTHhG2oyg`,
  advocate: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTk0OTUwOTU4OSIsImlkIjoiNjBiNDdkYWJlYTQxYjk2NzdjMzkxNDMyIiwidXNlcm5hbWUiOiIwMTk0OTUwOTU4OSIsInVzZXJfdHlwZSI6WyJBRFZPQ0FURSJdLCJsYXRlc3RQbGFuSWQiOiI2MGI0N2RhYmVhNDFiOTY3N2MzOTE0MzQiLCJpc3MiOiJwcm9qZWN0eC1hZHZvY2F0ZS1tYW5hZ2VtZW50LXNvZnR3YXJlIiwiaWF0IjoxNjIzNDcxMzA2LCJleHAiOjE2MjM1NTc3MDZ9.GwsNMJ-Q8NpwxUy4_ieAyk2ylQXFOOVmfJoXUYzgp98lrFvM2WrM2O72cwDC3mehTDk933FepZ1lbSU88Zg6EA`,
};

const httpLink = new HttpLink({ uri: "https://api.xattorney.app/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      // authorization: token.advocate,
      authorization: token.admin,
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  // uri: "https://api.xattorney.app/graphql",
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
