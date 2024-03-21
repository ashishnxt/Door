import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

import { Auth0Provider } from "@auth0/auth0-react";
import { TransactionsProvider } from "./context/TransactionContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain="decentralisedoor.us.auth0.com"
  clientId="yJgjtTKGFDLgWQssu92rTuSsgv6osW5x"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <ThirdwebProvider desiredChainId={ChainId.Goerli}> 
  
    <Router>
   
      <StateContextProvider>
<TransactionsProvider>
    
        <App />
  </TransactionsProvider>

      </StateContextProvider>
      
    </Router>
    
  </ThirdwebProvider>


  </Auth0Provider> 
   
)