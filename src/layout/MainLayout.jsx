import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const authContext = createContext();
const MainLayout = () => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
      setLoading(true);
        signInWithPopup(auth, googleProvider)
        // .then(result=>setUser(result.user))
    }
    const handleSignUp = (email, password, photoURL, displayName) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          // Update displayName and photoURL
          updateProfile(result.user, {
            displayName: displayName,
            photoURL: photoURL,
          });
        })
        .catch(() => {
          // Handle errors silently or as required
        })
        .finally(() => {
          setLoading(false);
        });
    };
    
    const handleUpdate = (displayName, photoURL) => {
      setLoading(true); // Start loading indicator
      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: photoURL,
        })
          .then(() => {
            // Update successful
            setUser({
              ...auth.currentUser,
              displayName: displayName,
              photoURL: photoURL,
            }); // Update local state
          })
          .catch((error) => {
            
          })
          .finally(() => {
            setLoading(false); // Stop loading indicator
          });
      }
    };
    
    
    const handleSignIn = (email,password) =>{
      setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogout = () =>{
      setLoading(true)
        signOut(auth);
    }

    useEffect(()=>{
    },[user])
  
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
          if(currentUser){
            setUser(currentUser)
          }
          else{
            setUser(null);
          }
          setLoading(false);
          });

          return ()=>{
            unsubscribe()
          } 
    },[])

    const authData = {
        handleGoogleLogin,
        user,
        setUser,
        handleLogout,
        handleSignUp,
        handleSignIn,
        loading,
        handleUpdate
    }

    return (
        <div>
            <authContext.Provider value={authData}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </authContext.Provider>
        </div>
    );
};

export default MainLayout;