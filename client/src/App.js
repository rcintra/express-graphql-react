import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Projects from "./components/Projects";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Projects />
        </div>
      </ApolloProvider> 
    </>
  );
}

export default App;
