import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: "https://pentria-apiv1-4w2bw.ondigitalocean.app/graphql",
});

const appolloClient = new ApolloClient({
  uri: link,
  cache: new InMemoryCache(),
});

export default appolloClient;
