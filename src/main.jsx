
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-ysmck-y3.us.auth0.com"
    clientId="R0jhpgjkMKnW2avsjfVEfrr6AZ3sGl9S"
    redirectUri={window.location.origin}
 
  >
    <App />
    </Auth0Provider>
);