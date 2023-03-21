import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client'




const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graph.nucleus.byjusexamprep.com",
    credentials: 'include',
  }),
  cache: new InMemoryCache,
})

export default function App({ Component, pageProps }) {
  console.log("here = "+JSON.stringify(pageProps))
  return(
<>
  <ApolloProvider client={client}>
  <Navbar name={pageProps.obj.name} examCategory="SSC"/>
  <Component {...pageProps} />
  </ApolloProvider>
</>
  )
}
