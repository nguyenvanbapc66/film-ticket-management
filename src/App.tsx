import React from 'react';
import firebase from 'firebase/compat/app';
import { Button } from '@material-ui/core';
import { AppInput } from './components/core';
// import firebase from 'firebase/compat/auth';

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          // Using a popup.
          var provider = new firebase.auth.GoogleAuthProvider();
          console.log(provider);
          provider.addScope('profile');
          provider.addScope('email');
          // firebase.auth().signInWithPopup(provider);
          // .then(function (result) {
          //   // This gives you a Google Access Token.
          //   var token = result.credential.accessToken;
          //   // The signed-in user info.
          //   var user = result.user;
          // });
        }}>
        Sign In with Google
      </Button>
      <AppInput />
    </div>
  );
}

export default App;
