import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import AppRouter from "./AppRouter";

function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
