import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
   }
   const logOut = () => {
      setLoading(true);
      return signOut(auth)
   }
   const authInfo = {
      user,
      createUser,
      logOut,
      signIn,
      loading,
   };
  
   useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('user in the auth state changed', currentUser);
         setUser(currentUser);
         setLoading(false);
      })
      return () => {
         unSubscribe();
      }
   },[])

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;

AuthProvider.propTypes = {
   children: PropTypes.node,
}