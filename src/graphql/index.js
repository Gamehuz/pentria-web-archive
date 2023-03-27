import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('auth-token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const params = {
  link: ApolloLink.from([
    authLink,
    new HttpLink({
      uri: "https://pentria-apiv1-4w2bw.ondigitalocean.app/graphql",
    })
  ]),
  cache: new InMemoryCache(),
  connectToDevTools: true
}

const appolloClient = new ApolloClient(params);

export default appolloClient;
