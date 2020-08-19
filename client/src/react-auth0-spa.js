import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;


// import React, { useState, useEffect, useContext } from "react";
// import createAuth0Client from "@auth0/auth0-spa-js";

// const DEFAULT_REDIRECT_CALLBACK = () =>
//   window.history.replaceState({}, document.title, window.location.pathname);

// export const Auth0Context = React.createContext();
// export const useAuth0 = () => useContext(Auth0Context);
// export const Auth0Provider = ({
//   children,
//   onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
//   ...initOptions
// }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState();
//   const [user, setUser] = useState();
//   const [auth0Client, setAuth0] = useState();
//   const [loading, setLoading] = useState(true);
//   const [popupOpen, setPopupOpen] = useState(false);

//   useEffect(() => {
//     const initAuth0 = async () => {
//       const auth0FromHook = await createAuth0Client(initOptions);
//       setAuth0(auth0FromHook);

//       if (window.location.search.includes("code=") &&
//           window.location.search.includes("state=")) {
//         const { appState } = await auth0FromHook.handleRedirectCallback();
//         onRedirectCallback(appState);
//       }

//       const isAuthenticated = await auth0FromHook.isAuthenticated();

//       setIsAuthenticated(isAuthenticated);

//       if (isAuthenticated) {
//         const user = await auth0FromHook.getUser();
//         setUser(user);
//       }

//       setLoading(false);
//     };
//     initAuth0();
//     // eslint-disable-next-line
//   }, []);

//   const loginWithPopup = async (params = {}) => {
//     setPopupOpen(true);
//     try {
//       await auth0Client.loginWithPopup(params);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setPopupOpen(false);
//     }
//     const user = await auth0Client.getUser();
//     setUser(user);
//     setIsAuthenticated(true);
//   };

//   const handleRedirectCallback = async () => {
//     setLoading(true);
//     await auth0Client.handleRedirectCallback();
//     const user = await auth0Client.getUser();
//     setLoading(false);
//     setIsAuthenticated(true);
//     setUser(user);
//   };
//   return (
//     <Auth0Context.Provider
//       value={{
//         isAuthenticated,
//         user,
//         loading,
//         popupOpen,
//         loginWithPopup,
//         handleRedirectCallback,
//         getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
//         loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
//         getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
//         getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
//         logout: (...p) => auth0Client.logout(...p)
//       }}
//     >
//       {children}
//     </Auth0Context.Provider>
//   );
// };