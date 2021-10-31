import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from '../../src/Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      const newUser = { ...user, displayName: name }
      setUser(newUser)

    }).catch((error) => {

    });
  }

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {

    });
  }

  return {
    user, setUser,
    signInWithGoogle,
    isLoading,
    setIsLoading,
    logOut,
    updateName

  }
}

export default useFirebase;






