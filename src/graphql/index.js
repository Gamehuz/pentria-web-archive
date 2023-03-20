import { ApolloClient, InMemoryCache } from "@apollo/client";


const appolloClient = new ApolloClient({
  uri: "https://pentria-apiv1-4w2bw.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

export default appolloClient;
