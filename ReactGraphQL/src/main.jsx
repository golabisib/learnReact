import './index.css'

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"

import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
)
