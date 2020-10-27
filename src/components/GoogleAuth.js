// import React, { useState, useEffect } from "react";

// function GoogleAuth() {
//   const [auth, setAuth] = useState({});
//   const [isSignedIn, setIsSignedIn] = useState(null);

//   useEffect(() => {
//     window.gapi.load("client:auth2", () => {
//       window.gapi.client
//         .init({
//           clientId:
//             "372648841363-lp3t55khg24h1ol83r3j8h8s1l31e577.apps.googleusercontent.com",
//           scope: "email",
//         })
//         .then(() => {
//           const googleAuth = window.gapi.auth2.getAuthInstance();

//           setAuth(googleAuth);
//           setIsSignedIn(googleAuth.isSignedIn.get());
//           googleAuth.isSignedIn.listen(onAuthChange);
//         });
//     });
//   }, []);

//   const onAuthChange = () => {
//     setIsSignedIn(auth.isSignedIn?.get());
//   };

//   console.log(isSignedIn);

//   const onSignIn = () => {
//     auth.signIn();
//   };

//   const onSignOut = () => {
//     auth.signOut();
//   };

//   function renderAuthButton() {
//     if (isSignedIn === null) {
//       return null;
//     }
//     if (isSignedIn === true) {
//       return (
//         <button onClick={onSignOut} className="ui red google button">
//           <i className="google icon" />
//           Sign Out
//         </button>
//       );
//     }
//     if (isSignedIn === false) {
//       return (
//         <button onClick={onSignIn} className="ui red google button">
//           <i className="google icon" />
//           Sign In with Google
//         </button>
//       );
//     }
//   }

//   return <div>{renderAuthButton()}</div>;
// }

// export default GoogleAuth;
