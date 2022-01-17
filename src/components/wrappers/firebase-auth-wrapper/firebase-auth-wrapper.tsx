import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { firebaseConfig } from 'src/configs';

interface FirebaseAuthWrapperProps {
  children?: any;
}

const FirebaseAuthWrapper: React.FC<FirebaseAuthWrapperProps> = ({ children }) => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return <div>{children}</div>;
};

export default FirebaseAuthWrapper;
